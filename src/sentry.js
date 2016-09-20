/* eslint no-unused-vars: 0 */
import React from 'react';
import { Platform } from 'react-native';
import Raven from 'raven-js';
import ravenReactNative from 'raven-js/plugins/react-native';
import { version } from '../package.json';
import { SENTRY_DSN_PUBLIC } from './constants';

if (SENTRY_DSN_PUBLIC) {
  ravenReactNative(Raven);

  Raven
    .config(SENTRY_DSN_PUBLIC, {
      environment: `mobile-${Platform.OS}`,
      release: version,
    })
    .install();
}

export default Raven;

export function captureException(err) {
  if (SENTRY_DSN_PUBLIC) {
    Raven.captureException(err);
  }
  if (typeof console !== 'undefined') {
    console.error(err);
  }
}
