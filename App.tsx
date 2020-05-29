import 'react-native-gesture-handler';
import React from 'react';
import AddButton from './src/components/add-button';
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

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const onAdd = () => {
    navigation.navigate('Modal');
  };

  return (
    <>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home</Text>
      </View>
      <AddButton onAdd={onAdd} />
    </>
  );
};

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
