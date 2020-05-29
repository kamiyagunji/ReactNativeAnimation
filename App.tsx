import 'react-native-gesture-handler';
import React from 'react';
import AddButton from './src/components/add-button';
import TabBar from './src/components/tab-bar';
import {View, Text} from 'react-native';
import {NavigationContainer, CompositeNavigationProp} from '@react-navigation/native';
import {createBottomTabNavigator, BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {createStackNavigator, StackNavigationProp} from '@react-navigation/stack';

type TabBarStackParamList = {
  Home: undefined,
}

type RootStackParamList = {
  TabBar: TabBarStackParamList,
  Modal: undefined,
}

interface HomeScreenProps {
  navigation: CompositeNavigationProp<
  BottomTabNavigationProp<TabBarStackParamList, 'Home'>,
  StackNavigationProp<RootStackParamList>
>;
}

const HomeScreen = () => (
  <>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home</Text>
    </View>
  </>
);

const ModalScreen = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'navy'}}>
    <Text>Modal</Text>
  </View>
);

const TabBarStack = createBottomTabNavigator<TabBarStackParamList>();
const TabBarStackScreen = () => (
  <TabBarStack.Navigator tabBar={(props) => <TabBar {...props} />}>
    <TabBarStack.Screen name="Home" component={HomeScreen} />
  </TabBarStack.Navigator>
);

const RootStack = createStackNavigator<RootStackParamList>();

const opacityTransition: object = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: {
      animation: 'timing',
    },
    close: {
      animation: 'timing',
      config: {
        duration: 300,
      },
    },
  },
  cardStyleInterpolator: ({ current } : {current: {progress: number}}) => ({
    cardStyle: {
      opacity: current.progress,
    },
  }),
};

const App = () => (
  <NavigationContainer>
    <RootStack.Navigator headerMode="none" mode="modal" screenOptions={{ ...opacityTransition }}>
      <RootStack.Screen name="TabBar" component={TabBarStackScreen} />
      <RootStack.Screen name="Modal" component={ModalScreen} />
    </RootStack.Navigator>
  </NavigationContainer>
);

export default App;
