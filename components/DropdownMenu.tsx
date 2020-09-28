import React from 'react';
import { Picker } from '@react-native-community/picker';
import { StyleSheet } from 'react-native';
import { DropdownMenuProps } from '../types';

export default function DropdownMenu({ data }: DropdownMenuProps): React.ReactElement {
  const {
    selected, items, setSelected, long,
  } = data;

  return (
    <Picker
      selectedValue={selected}
      style={long ? styles.longDropDown : styles.shortDropDown}
      mode="dropdown"
      onValueChange={(itemValue) => setSelected(itemValue)}
    >
      {items
        ? items.map((el) => <Picker.Item key={el} label={el} value={el} />)
        : null}
    </Picker>
  );
}

const styles = StyleSheet.create({
  shortDropDown: {
    width: 171,
    height: 51,
    padding: 8,
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
  },
  longDropDown: {
    width: 346,
    height: 51,
    padding: 8,
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
  },
});
