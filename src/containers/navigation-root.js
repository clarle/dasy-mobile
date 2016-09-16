import { connect } from 'react-redux';
import NavigationRoot from '../components/navigation-root';
import { push, pop, prev, next } from '../actions/navigation';

function mapStateToProps(state) {
  return {
    navigation: state.navigation,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    pushRoute: route => dispatch(push(route)),
    popRoute: () => dispatch(pop()),
    prevRoute: () => dispatch(prev()),
    nextRoute: () => dispatch(next()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationRoot);
