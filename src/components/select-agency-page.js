/* eslint "react/prefer-stateless-function": 0 */
/* eslint no-useless-constructor: 0 */

import React, { Component, PropTypes } from 'react';
import {
  ListView,
  View,
  StatusBar,
} from 'react-native';
import NavigationBar from 'react-native-navbar';
import groupBy from 'lodash/groupBy';
import ListRow from './list-row';
import ListHeader from './list-header';
import LoadingIndicator from './loading-indicator';
import * as $ from '../styles/variables';
import { grid } from '../styles';
import navbar from '../styles/navbar';
import list from '../styles/list';

export default class SelectAgencyPage extends Component {
  constructor(props) {
    super(props);
    this.selectAgency = this.selectAgency.bind(this);
    this.requestAgencies = this.requestAgencies.bind(this);
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
    return () => this.props.selectAgency(agency);
  }

  requestAgencies() {
    return this.props.requestAgencies({
      query: {
        skip: this.props.agencies.length,
        limit: this.props.limit,
        sort: 'type,name',
      },
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

    let ds = new ListView.DataSource({
      sectionHeaderHasChanged: (h1, h2) => h1 !== h2,
      rowHasChanged: (r1, r2) => r1.id !== r2.id,
    });

    ds = ds.cloneWithRowsAndSections(groupedAgencies, Object.keys(groupedAgencies));

    const loadingIndicator = this.props.loading && this.props.agencies.length === 0
      ? <LoadingIndicator />
      : null;

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
        />
        {loadingIndicator}
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
  // nextRoute: PropTypes.func,
  prevRoute: PropTypes.func,
  requestAgencies: PropTypes.func,
  selectAgency: PropTypes.func,
  agencies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string, /* eslint "react/no-unused-prop-types": 0 */
  })),
  loading: PropTypes.bool,
  more: PropTypes.bool,
};
