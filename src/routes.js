// import App from './components/app';
import HomePage from './containers/home-page';
import SelectTypePage from './containers/select-type-page';
import SelectAgencyPage from './containers/select-agency-page';
import SendMessagePage from './containers/send-message-page';
import ThankYouPage from './containers/thank-you-page';

export function Route(options) {
  this.key = options.key;
  this.component = options.component;
  this.title = options.title;
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
  title: 'Select Agency',
});

export const sendMessage = new Route({
  key: 'send-message',
  component: SendMessagePage,
  title: 'Message',
});

export const thankYou = new Route({
  key: 'thank-you',
  component: ThankYouPage,
});
