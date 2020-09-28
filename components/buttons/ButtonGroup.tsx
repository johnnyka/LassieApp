import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, GestureResponderEvent } from 'react-native';
import { useTheme } from '@react-navigation/native';


import { Text, View } from '../Themed';

export default function ButtonGroup(props: { buttons: Array<{ name: string, pressHandler: (e: GestureResponderEvent) => void}> }): React.ReactElement {
  const [activeIndex, setActiveIndex] = useState(0);
  const { buttons } = props;
  const { colors: { text, primary, background } } = useTheme();

  return (
    <View style={[styles.buttonGroup, { backgroundColor: background }]}>
      {buttons.map((btn, index) => (
        <TouchableOpacity
          key={btn.name}
          onPress={(e) => {
            setActiveIndex(index);
            btn.pressHandler(e);
          }}
          style={activeIndex === index
            ? [styles.button, { backgroundColor: primary }]
            : [styles.button, { backgroundColor: background }]}
        >
          <Text
            style={activeIndex === index
              ? [styles.btnText, { color: '#fff' }]
              : [styles.btnText, { color: text }]}
          >
            {btn.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  buttonGroup: {
    flexDirection: 'row',
  },
  button: {
    width: 150,
    padding: 15,
    borderRadius: 8,
    margin: 5,
    marginTop: 15,
    marginBottom: 15,
  },
  btnText: {
    textAlign: 'center',
    fontFamily: 'montserrat-semiBold',
    fontSize: 17,
  },
})