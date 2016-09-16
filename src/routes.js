// import App from './components/app';
import HomePage from './containers/home-page';
import SelectTypePage from './containers/select-type-page';
import SelectAgencyPage from './containers/select-agency-page';

function Route(options) {
  this.key = options.key;
  this.component = options.component;
}

export const home = new Route({
  key: 'home',
  component: HomePage,
});

export const selectType = new Route({
  key: 'select-type',
  component: SelectTypePage,
});

export const selectAgency = new Route({
  key: 'select-agency',
  component: SelectAgencyPage,
});
