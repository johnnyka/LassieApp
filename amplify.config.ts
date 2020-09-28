import * as Linking from 'expo-linking';
import Constants, { AppOwnership } from 'expo-constants';
import LinkingConfiguration from './navigation/LinkingConfiguration';

const getRedirectLink = () => {
  if (Constants.appOwnership === AppOwnership.Expo
      || Constants.appOwnership === AppOwnership.Standalone) {
    return `${Linking.makeUrl()}/--/`;
  } if (Constants.appOwnership === null) {
    // Seems this constant is null when we are in web mode
    return `${Linking.makeUrl()}/${LinkingConfiguration.config.screens.Root.screens.Start.screens.StartScreen}`;
  }
  return Linking.makeUrl();
};

const amplifyConfig = {
  // removed
};

export default amplifyConfig;
