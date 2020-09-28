import { Auth, Hub } from 'aws-amplify';
import React, { Component } from 'react';
import { CognitoUser } from 'amazon-cognito-identity-js';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { Button, SafeAreaView } from 'react-native';

interface AuthState {
    user: CognitoUser | null;
    customState?: string;
}

export default class Authenticate extends Component<{}, AuthState> {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  async componentDidMount():Promise<void> {
    Hub.listen('auth', ({ payload }) => {
      const { data, event } = payload;
      switch (event) {
        case 'signIn':
          this.setState({ user: data });
          break;
        case 'signOut':
          this.setState({ user: null });
          break;
        case 'customOAuthState':
          this.setState({ customState: data });
          break;
        default:
          this.setState({ user: null });
          break;
      }
    });

    try {
      const user = await Auth.currentAuthenticatedUser();
      this.setState({ user });
    } catch (e) {
      console.log('Not signed in');
    }
  }

  loginGoogle() {
    Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google });
  }

  loginFaceBook() {
    Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Facebook });
  }

  render() {
    console.log(this.state.user);
    return this.state.user ? (this.props.children) : (
      <SafeAreaView>
        <Button onPress={this.loginGoogle} title="Open Google" />
        <Button onPress={this.loginFaceBook} title="Open Facebook" />
        <Button onPress={() => Auth.federatedSignIn()} title="Open Hosted UI" />
      </SafeAreaView>
    );
  }
}
