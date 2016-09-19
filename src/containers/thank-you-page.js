import { connect } from 'react-redux';
import { push } from '../actions/navigation';
import { selectType } from '../routes';
import ThankYouPage from '../components/thank-you-page';

const mapDispatchToProps = (dispatch) => ({
  nextScreen: () => {
    dispatch(push(selectType));
  },
});

export default connect(null, mapDispatchToProps)(ThankYouPage);
