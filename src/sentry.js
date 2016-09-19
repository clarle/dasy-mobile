import raven from 'raven';

function noop() {}

const sentry = {
  client: {
    patchGlobal: noop,
    captureException: noop,
  },
};

if (process.env.NODE_ENV === 'production') {
  if (process.env.SENTRY_DSN_PUBLIC) {
    sentry.client = new raven.Client(process.env.SENTRY_DSN_PUBLIC);
    sentry.client.patchGlobal();
  }
}

export default sentry.client;
