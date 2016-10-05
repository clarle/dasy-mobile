import { connect } from 'react-redux';
import { push } from '../actions/navigation';
import { home } from '../routes';
import ThankYouPage from '../components/thank-you-page';

const mapDispatchToProps = (dispatch) => ({
  nextScreen: () => {
    dispatch(push(home));
  },
});

export default connect(null, mapDispatchToProps)(ThankYouPage);
