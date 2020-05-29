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

const HomeScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Home</Text>
  </View>
);

const ModalScreen = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'navy'}}>
    <Text>Modal</Text>
  </View>
);

const TabBarStack = createBottomTabNavigator<TabBarStackParamList>();
const TabBarStackScreen = () => (
  <TabBarStack.Navigator>
    <TabBarStack.Screen name="Home" component={HomeScreen} />
  </TabBarStack.Navigator>
);

const RootStack = createStackNavigator<RootStackParamList>();

const App = () => (
  <NavigationContainer>
    <RootStack.Navigator headerMode="none" mode="modal">
      <RootStack.Screen name="TabBar" component={TabBarStackScreen} />
      <RootStack.Screen name="Modal" component={ModalScreen} />
    </RootStack.Navigator>
  </NavigationContainer>
);

export default App;
