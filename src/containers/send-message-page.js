import { connect } from 'react-redux';
import SendMessagePage from '../components/send-message-page';
import { prev, push } from '../actions/navigation';
import { updateUser } from '../actions/user';
import { addAlert } from '../actions/alerts';
import {
  uploadSubmissionImg,
  updateSubmissionImgUrl,
  updateSubmissionMessage,
  submitSubmission,
} from '../actions/submission';
import { thankYou } from '../routes';

const mapStateToProps = (state) => ({
  user: state.user,
  submission: state.submission,
  loading: state.loading.loading,
  uploadingImg: state.loading.uploadingImg,
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
  onImageError: err => (dispatch(addAlert({
    message: err,
    type: 'error',
  }))),
  onImageReset: () => (dispatch(updateSubmissionImgUrl(''))),
  onImageSelect: img => (dispatch(uploadSubmissionImg(img))),
});

export default connect(mapStateToProps, mapDispatchToProps)(SendMessagePage);
