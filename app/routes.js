import {createAppContainer} from 'react-navigation';

import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import {Dimensions} from 'react-native';

import React from 'react';
import DrawerScreen from './modules/components/drawerScreen/index';

const window = Dimensions.get('window');

import Menu from './modules/screens/menu/index';
import Feed from './modules/screens/feed/index';
import Credits from './modules/screens/credits/index';
import About from './modules/screens/about/index';
import Advertise from './modules/screens/advertise/index';
import Settings from '~/modules/screens/settings/index';
import styles from './modules/styles/index';
import TabBar from '~/modules/components/tabNavigator/';
import {StackMenuHeader} from '~/modules/components/StackHeader/index';

const TopTabNavigator = createMaterialTopTabNavigator(
  {
    Cardapio: {screen: Menu},
    Feed: {screen: Feed},
  },
  {
    tabBarComponent: TabBar,
  },
);

const StackNavigator = createStackNavigator({
  Home: {
    screen: TopTabNavigator,
    navigationOptions: {
      header: props => <StackMenuHeader props={props} value={'RU UFSCar'} />,
    },
  },
  About: {
    screen: About,
  },
  Advertise: {
    screen: Advertise,
  },
  Settings: {
    screen: Settings,
  },
});

const Drawer = createDrawerNavigator(
  {
    Home: {screen: StackNavigator},
  },
  {
    initialRouteName: 'Home',
    drawerWidth: window.width * 0.75,
    contentComponent: ({navigation}) => <DrawerScreen props={navigation} />,
    hideStatusBar: false,
  },
);

export default createAppContainer(Drawer);
