import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconIonicons from 'react-native-vector-icons/Ionicons';

import PayButton from './components/PayButton';

import HomeScreen from './screens/Home';
import WalletScreen from './screens/Wallet';
import NotificationScreen from './screens/Notification';
import SettingsScreen from './screens/Settings';
import TopNavigation from './TopNavigation';

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        style: {
          backgroundColor: '#131418',
          borderTopColor: 'rgba(255, 255, 255, 0.2)',
        },
        activeTintColor: '#fff',
        inactiveTintColor: '#92929c',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Início',
          tabBarIcon: ({color, size}) => (
            <IconAntDesign name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          title: 'Carteira',
          tabBarIcon: ({color, size}) => (
            <IconAntDesign name="creditcard" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Pay"
        component={TopNavigation}
        options={{
          title: '',
          tabBarIcon: ({focused}) => <PayButton focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          title: 'Notificações',
          tabBarIcon: ({color, size}) => (
            <IconIonicons
              name="ios-notifications-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: 'Ajustes',
          tabBarIcon: ({color, size}) => (
            <IconAntDesign name="setting" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
