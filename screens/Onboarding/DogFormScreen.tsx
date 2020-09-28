import * as React from 'react';
import DogForm from '../../components/DogLoginData';
import { Step1ScreenProps } from '../../types';

export default function dogFormScreen({ navigation }: Step1ScreenProps): React.ReactElement {
  return (
    <>
      <DogForm navigation={navigation} />
    </>
  );
}
