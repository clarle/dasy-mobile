# Dasy

> Message a public agency with a discussion starter like positive, idea, or question feedback.


## Setup

#### Requirements

- Node.js (v6 and up)
- React Native CLI
- Xcode (for iOS)
- Android Studio (for Android)

#### Installation

Clone this repo.

    git clone git@github.com:dasylabs/dasy-mobile.git

Install react-native command line interface.

    npm install -g react-native-cli

#### Environment Variables

You will need to create a `.env` file in the repo root that contains the environment variables needed in [constants.js](./src/constants.js)

```ini
HOST=https://www.dasy.io
MIXPANEL_ID=123
SENTRY_DSN_PUBLIC=https://123@sentry.io/456
```

#### iOS

`cd` to iOS folder

    pod install


#### Running the App

    react-native run-ios

OR

    react-native run-android

**iOS NOTE:** You must have Xcode installed for this to work. You can download xcode from the Mac App Store.

**ANDROID NOTE:**: You must have an Android device connected or an emulator running for this to work.


## License

Copyright (C) 2016  Dasy Labs, Inc.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
