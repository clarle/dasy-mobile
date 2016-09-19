import { connect } from 'react-redux';
import SendMessagePage from '../components/send-message-page';
import { prev, push } from '../actions/navigation';
import { updateUser } from '../actions/user';
import { updateSubmissionMessage, submitSubmission } from '../actions/submission';
import { thankYou } from '../routes';

const mapStateToProps = (state) => ({
  user: state.user,
  submission: state.submission,
});

const mapDispatchToProps = (dispatch) => ({
  prevRoute: () => dispatch(prev()),
  nextRoute: () => dispatch(push(thankYou)),
  onChange: (key, value) => {
    if (key === 'message') {
      dispatch(updateSubmissionMessage(value));
    } else {
      dispatch(updateUser({
        [key]: value,
      }));
    }
  },
  onSubmit: () => (dispatch(submitSubmission())),
});

export default connect(mapStateToProps, mapDispatchToProps)(SendMessagePage);
