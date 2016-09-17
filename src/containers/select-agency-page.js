import { connect } from 'react-redux';
import SelectAgencyPage from '../components/select-agency-page';
import { push, prev } from '../actions/navigation';
import { sendMessage } from '../routes';

const mapDispatchToProps = (dispatch) => ({
  prevRoute: () => dispatch(prev()),
  nextRoute: () => dispatch(push(sendMessage)),
});

export default connect(null, mapDispatchToProps)(SelectAgencyPage);
