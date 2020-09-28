import { colorsTypes } from '../types';

const tintColorLight = '#4f51ff';
const tintColorLighter = '#ebebf5';
const tintColorDark = '#4F51FF';
const primaryColor = '#020037';

const light: colorsTypes = {
  text: '#000',
  textSecondary: '#E2E2E2',
  background: '#F2F2F2',
  tint: tintColorLight,
  tintLighter: tintColorLighter,
  tabIconDefault: '#040404',
  tabIconSelected: tintColorLight,
  primary: primaryColor,
};
const dark: colorsTypes = {
  text: '#E2E2E2',
  textSecondary: '#000',
  background: '#121212',
  card: '#1F1F1F',
  tint: tintColorDark,
  tintLighter: tintColorLighter,
  tabIconDefault: '#ccc',
  tabIconSelected: '#8889f2',
  primary: '#4F51FF',
};
const photo: { background: string } = {
  background: '#e3e3e3',
};

export default { light, dark, photo };
