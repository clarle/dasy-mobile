import { connect } from 'react-redux';
import SendMessagePage from '../components/send-message-page';
import { prev } from '../actions/navigation';

const mapDispatchToProps = (dispatch) => ({
  prevRoute: () => dispatch(prev()),
});

export default connect(null, mapDispatchToProps)(SendMessagePage);
