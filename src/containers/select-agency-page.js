import { connect } from 'react-redux';
import SelectAgencyPage from '../components/select-agency-page';
import { push, prev } from '../actions/navigation';
import { fetchAgencies, resetAgencies } from '../actions/agencies';
import { selectAgency } from '../actions/submission';
import { sendMessage } from '../routes';

const mapStateToProps = (state) => ({
  loading: state.agencies.loading,
  more: state.agencies.more,
  agencies: state.agencies.data,
});

const mapDispatchToProps = (dispatch) => ({
  prevRoute: () => {
    dispatch(prev());
    dispatch(resetAgencies());
  },
  nextRoute: () => dispatch(push(sendMessage)),
  requestAgencies: req => dispatch(fetchAgencies(req)),
  selectAgency: agency => {
    dispatch(selectAgency(agency.id));
    dispatch(push(sendMessage));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectAgencyPage);
