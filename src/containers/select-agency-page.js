import { connect } from 'react-redux';
import SelectAgencyPage from '../components/select-agency-page';
import { push, prev } from '../actions/navigation';
import { fetchAgencies, resetAgencies, searchAgencies } from '../actions/agencies';
import { selectSubmissionAgency } from '../actions/submission';
import { sendMessage } from '../routes';

const mapStateToProps = (state) => ({
  loading: state.agencies.loading,
  more: state.agencies.more,
  agencies: state.agencies.data,
  search: state.agencies.search,
});

const mapDispatchToProps = (dispatch) => ({
  prevRoute: () => {
    dispatch(prev());
    dispatch(resetAgencies());
  },
  nextRoute: () => dispatch(push(sendMessage)),
  requestAgencies: req => dispatch(fetchAgencies(req)),
  selectAgency: agency => {
    dispatch(selectSubmissionAgency(agency.id));
    dispatch(push(sendMessage));
  },
  onSearch: input => {
    dispatch(resetAgencies());
    dispatch(searchAgencies(input));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectAgencyPage);
