import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import Amplify from 'aws-amplify';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';
// import amplifyConfig from './amplify.config';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
// import Authenticate from './components/Authenticate';

const client = new ApolloClient({
  uri: 'http://192.168.0.12:4000',
  cache: new InMemoryCache(),
});

// Amplify.configure(amplifyConfig);

export default function App(): React.ReactElement | null {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <SafeAreaProvider>
      {/* <Authenticate> */}
      <ApolloProvider client={client}>

        <Navigation colorScheme={colorScheme} />
        <StatusBar style="light" />

      </ApolloProvider>
      {/* </Authenticate> */}
    </SafeAreaProvider>
  );
}
