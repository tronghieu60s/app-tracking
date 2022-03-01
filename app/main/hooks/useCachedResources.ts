import {APP_VERSION_DEFAULT} from '@const/config';
import {initDBTable, loadDataDBTable, loadNewDataDBTable} from '@core/db/data';
import {getCurrentVersion, setCurrentVersion} from '@core/storage';
import {checkUpdate} from '@core/version';
import {APP_DATA_VERSION} from '@env';
import React, {useEffect} from 'react';
import DeviceInfo from 'react-native-device-info';
import SplashScreen from 'react-native-splash-screen';

console.log(APP_DATA_VERSION);

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // First loading
        const currentVersion = await getCurrentVersion();
        const isFirstLoading = currentVersion === APP_VERSION_DEFAULT;

        console.info(`[Application] App Version: ${DeviceInfo.getVersion()}`);
        console.info(`[Application] Data Version: ${APP_DATA_VERSION}`);
        console.info(`[Application] Current Data Version: ${currentVersion}`);

        // Init Database Table
        await initDBTable();

        if (isFirstLoading) {
          await loadDataDBTable();
          setCurrentVersion(APP_DATA_VERSION);
        } else {
          // Check for updates
          const updated = checkUpdate(currentVersion, APP_DATA_VERSION);
          if (updated) {
            await loadNewDataDBTable();
            setCurrentVersion(APP_DATA_VERSION);
          }
        }
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.error(e);
      } finally {
        SplashScreen.hide();
        setLoadingComplete(true);
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
