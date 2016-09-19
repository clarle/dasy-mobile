import { connect } from 'react-redux';
import App from '../components/app';
import { dismissAlert } from '../actions/alerts';

const mapStoreToProps = (store) => ({
  alerts: store.alerts.alerts,
});

const mapDispatchToProps = (dispatch) => ({
  dismissAlert: alert => {
    dispatch(dismissAlert(alert));
  },
});

export default connect(mapStoreToProps, mapDispatchToProps)(App);
