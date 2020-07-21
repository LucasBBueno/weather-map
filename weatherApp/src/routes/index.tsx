import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../pages/Welcome/index';
import DashBoard from '../pages/DashBoard/index';

const App = createStackNavigator();

const Routes: React.FC = () => (
  <App.Navigator screenOptions={{
    headerShown: false,
    cardStyle: {
      backgroundColor: '#FFF',
    },
  }}
  >
    <App.Screen name="Welcome" component={Welcome} />
    <App.Screen name="DashBoard" component={DashBoard} />
  </App.Navigator>
);

export default Routes;
