import { GestureResponderEvent, TextStyle } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp, Theme } from '@react-navigation/native';

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  Drawer: undefined;
  Onboarding: undefined;
};

export type BottomTabParamList = {
  Start: undefined;
  Knowledge: undefined;
  Map: undefined;
  Leaderboard: undefined;
  Favorites: undefined;
};

export type ArticleData = {
  id: string;
  content: string;
  title: string;
  readTime: number;
  views: number;
  imgUri: string;
  recommended: boolean;
  filters: string[];
};

export type ButtonProps = {
  title: string;
  onPress: (event?: GestureResponderEvent) => void;
};

export type Dog = {
  image?: string | null;
  name?: string;
  age?: number;
};

export type OnboardingStackParamList = {
  step1: undefined;
  step2: undefined;
  notification: undefined;
  NotFound: undefined;
}

export type KnowledgeStackParamList = {
  KnowledgeScreen: undefined;
  ArticleScreen: ArticleData;
};

export type KnowledgeProps = {
  navigation?: StackNavigationProp<KnowledgeStackParamList, 'KnowledgeScreen'>;
  route?: RouteProp<KnowledgeStackParamList, 'KnowledgeScreen'>;
};

export type ArticleProps = {
  navigation: StackNavigationProp<KnowledgeStackParamList, 'ArticleScreen'>;
  route: RouteProp<KnowledgeStackParamList, 'ArticleScreen'>;
};

export type StartParamList = {
  Start: undefined;
  KnowledgeScreen: undefined;
  LeaderboardScreen: undefined;
  MapScreen: undefined;
  FavoritesScreen: undefined;
  ArticleScreen: ArticleData;
};

export type Step1ScreenNavigationProp = StackNavigationProp<
  OnboardingStackParamList,
  'step1'
>

export type Step1ScreenProps = {
  navigation: Step1ScreenNavigationProp
}

export type Step2ScreenNavigationProp = StackNavigationProp<
  OnboardingStackParamList,
  'step2'
>

export type Step2ScreenProps = {
  navigation: Step2ScreenNavigationProp
}

export type StartHomeProps = {
  navigation: StackNavigationProp<StartParamList, 'Start'>;
  route?: RouteProp<StartParamList, 'Start'>;
};

export type StartHomeRoute = {
  route: RouteProp<StartParamList, 'Start'>;
}

export type MapStackParamList = {
  MapScreen: undefined;
};

export type MapHomeProps = {
  route: RouteProp<MapStackParamList, 'MapScreen'>;
};

export type LeaderboardStackParamList = {
  LeaderboardScreen: undefined;
};

export type LeaderboardHomeProps = {
  route: RouteProp<LeaderboardStackParamList, 'LeaderboardScreen'>;
};

export type FavoritesStackParamList = {
  FavoritesScreen: undefined;
};

export type FavoritesHomeProps = {
  route: RouteProp<FavoritesStackParamList, 'FavoritesScreen'>;
};

export type KnowledgeRoute = {
  route: RouteProp<KnowledgeStackParamList, 'KnowledgeScreen'>;
}

export type RouteOptions =
  StartHomeRoute |
  KnowledgeRoute |
  MapHomeProps |
  LeaderboardHomeProps |
  FavoritesHomeProps;

export type StackNavigationReturns =
  string |
  (({ route }: StartHomeRoute) => React.ReactElement) |
  (({ route }: KnowledgeRoute) => React.ReactElement) |
  (({ route }: MapHomeProps) => React.ReactElement) |
  (({ route }: LeaderboardHomeProps) => React.ReactElement) |
  (({ route }: FavoritesHomeProps) => React.ReactElement);

export type NavigationStyle = {
  container: {
    backgroundColor?: string,
    labelStyle: TextStyle;
    paddingLeft: number;
    paddingRight: number;
  };
};
export type colorsTypes = {
  card?: string;
  background: string
  primary: string;
  text: string;
  textSecondary?: string;
  tint?: string;
  tintLighter?: string;
  tabIconDefault?: string;
  tabIconSelected?: string;
}

export type themeColorTypes = {
  dark?: boolean;
  colors: colorsTypes;
}
export type useThemeTypes = themeColorTypes & Theme;

export type TextInputFieldProps = {
  placeholder: string,
  onChangeText: (inputText: string) => void
}

export type DropdownMenuProps = {
  data: {
    selected: string | number;
    setSelected: React.Dispatch<React.SetStateAction<string | number>>;
    items: Array<string>;
    long: boolean;
  }
}
