import App from './containers/app';
import HomePage from './containers/home-page';
import SelectTypePage from './containers/select-type-page';

export default {
  path: '/',
  component: App,
  indexRoute: { component: HomePage },
  childRoutes: [
    { path: 'select-type', component: SelectTypePage },
  ],
};
