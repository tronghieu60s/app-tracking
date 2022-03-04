/**
 * @format
 */

import I18n from 'i18n-js';
import {AppRegistry} from 'react-native';
import CodePush from 'react-native-code-push';
import {name as appName} from './app.json';
import App from './AppSetup';

AppRegistry.registerComponent(appName, () =>
  CodePush({
    updateDialog: {
      optionalInstallButtonLabel: I18n.t('app.update.install'),
      optionalIgnoreButtonLabel: I18n.t('app.update.ignore'),
      title: I18n.t('app.update.title'),
      optionalUpdateMessage: I18n.t('app.update.message'),
    },
    installMode: CodePush.InstallMode.IMMEDIATE,
    checkFrequency: CodePush.CheckFrequency.ON_APP_START,
  })(App),
);
