import * as React from 'react';
import { Component } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DailyReadingTabs from './dailyReadingTabs';

const Drawer = createDrawerNavigator();

export default function AppDrawer() {
  return (
      <Drawer.Navigator>
        <Drawer.Screen name="Today's Reading" component={DailyReadingTabs} />
      </Drawer.Navigator>
  );
}