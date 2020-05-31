import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Entypo from 'react-native-vector-icons/Entypo';

import PayMainScreen from './screens/PayMain';
import PayLocationScreen from './screens/PayLocation';

const Tab = createMaterialTopTabNavigator();

export default function TopNavigation() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: '#131418',
        },
        activeTintColor: '#fff',
        inactiveTintColor: '#92929c',
        tabStyle: {
          flexDirection: 'row',
          height: 45,
        },
        indicatorStyle: {
          height: 2,
          borderRadius: 5,
          backgroundColor: '#10c86e',
        },
        showIcon: true,
      }}>
      <Tab.Screen
        name="Main"
        component={PayMainScreen}
        options={{
          title: 'Principais',
        }}
      />
      <Tab.Screen
        name="Location"
        component={PayLocationScreen}
        options={{
          title: 'Locais',
          tabBarIcon: ({color}) => (
            <Entypo name="location-pin" color={color} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
