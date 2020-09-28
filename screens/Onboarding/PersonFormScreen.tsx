import * as React from 'react';
import PersonForm from '../../components/CustomerLoginData';
import { Step2ScreenProps } from '../../types';

export default function PersonFormScreen({ navigation }: Step2ScreenProps): React.ReactElement {
  return (
    <PersonForm navigation={navigation} />
  );
}
