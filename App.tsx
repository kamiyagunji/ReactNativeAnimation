import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

type TabBarStackParamList = {
  Home: undefined,
}

type RootStackParamList = {
  TabBar: TabBarStackParamList,
  Modal: undefined,
}

const App = () => (
  <NavigationContainer>
    <RootStack.Navigator headerMode="none" mode="modal">
      <RootStack.Screen name="TabBar" component={TabBarStackScreen} />
      <RootStack.Screen name="Modal" component={ModalScreen} />
    </RootStack.Navigator>
  </NavigationContainer>
);

export default App;
