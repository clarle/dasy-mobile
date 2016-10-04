import React, { Component, PropTypes } from 'react';
import {
  ListView,
  View,
  StatusBar,
  Text,
} from 'react-native';
import NavigationBar from 'react-native-navbar';
import groupBy from 'lodash/groupBy';
import throttle from 'lodash/throttle';
import { SUGGESTION_MAILTO_URL } from '../constants';
import { handleUrl } from '../utils';
import ListRow from './list-row';
import ListHeader from './list-header';
import LoadingIndicator from './loading-indicator';
import SearchBar from './search-bar';
import * as $ from '../styles/variables';
import { grid } from '../styles';
import navbar from '../styles/navbar';
import list from '../styles/list';
import { trackSubmissionAgency } from '../mixpanel';

export default class SelectAgencyPage extends Component {
  constructor(props) {
    super(props);
    this.selectAgency = this.selectAgency.bind(this);
    this.requestAgencies = throttle(this.requestAgencies.bind(this), 100);
    this.searchAgencies = this.searchAgencies.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
    this.renderRow = this.renderRow.bind(this);
    this.onEndReached = this.onEndReached.bind(this);
  }

  componentDidMount() {
    this.requestAgencies();
  }

  onEndReached() {
    if (this.props.more) {
      this.requestAgencies();
    }
  }

  selectAgency(agency) {
    return () => {
      trackSubmissionAgency(agency.id);
      return this.props.selectAgency(agency);
    };
  }

  requestAgencies() {
    const query = {
      skip: this.props.agencies.length,
      limit: this.props.limit,
      sort: '-type,name',
    };

    if (this.props.search) {
      query.q = this.props.search;
    }

    return this.props.requestAgencies({
      query,
    });
  }

  searchAgencies(str) {
    this.props.onSearch(str);
    setTimeout(() => {
      this.requestAgencies();
    });
  }

  renderHeader(rows, header) {
    /* eslint class-methods-use-this: 0 */
    return <ListHeader text={header} />;
  }

  renderRow(agency) {
    return <ListRow text={agency.name} onPress={this.selectAgency(agency)} />;
  }

  render() {
    const agencies = this.props.agencies;
    const groupedAgencies = groupBy(agencies, 'type');
    let loadingIndicator = null;
    let rightButton = null;
    let fallbackMessage = null;

    let ds = new ListView.DataSource({
      sectionHeaderHasChanged: (h1, h2) => h1 !== h2,
      rowHasChanged: (r1, r2) => r1.id !== r2.id,
    });

    ds = ds.cloneWithRowsAndSections(groupedAgencies, Object.keys(groupedAgencies));

    if (this.props.loading && this.props.agencies.length === 0) {
      loadingIndicator = <LoadingIndicator />;
    }

    if (this.props.loading === false && this.props.more === false) {
      rightButton = {
        rightButton: {
          title: 'Suggest',
          tintColor: $.WHITE,
          handler: handleUrl(SUGGESTION_MAILTO_URL),
        },
      };
    }

    if (!this.props.loading && this.props.search && this.props.agencies.length === 0) {
      fallbackMessage = (
        <Text style={list.fallbackText}>
          No agencies match your search. Tap suggest to let us know about new agencies.
        </Text>
      );
    }

    return (
      <View style={grid.container}>
        <StatusBar translucent barStyle="light-content" />
        <NavigationBar
          style={navbar.base}
          statusBar={{
            tintColor: $.BRAND_PRIMARY,
          }}
          title={{
            title: 'Select Agency',
            tintColor: $.WHITE,
          }}
          leftButton={{
            title: 'Back',
            tintColor: $.WHITE,
            handler: this.props.prevRoute,
          }}
          {...rightButton}
        />
        <SearchBar value={this.props.search} onChange={this.searchAgencies} autoCorrect={false} />
        {loadingIndicator}
        {fallbackMessage}
        <ListView
          style={list.base}
          dataSource={ds}
          renderSectionHeader={this.renderHeader}
          renderRow={this.renderRow}
          onEndReached={this.onEndReached}
        />
      </View>
    );
  }
}

SelectAgencyPage.defaultProps = {
  limit: 20,
};

SelectAgencyPage.propTypes = {
  skip: PropTypes.number,
  limit: PropTypes.number,
  prevRoute: PropTypes.func,
  requestAgencies: PropTypes.func,
  selectAgency: PropTypes.func,
  agencies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string, /* eslint "react/no-unused-prop-types": 0 */
  })),
  loading: PropTypes.bool,
  more: PropTypes.bool,
  search: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
};
