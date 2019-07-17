import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import Main from '~/pages/Main';
import Cart from '~/pages/Cart';
import Detail from '~/pages/Detail';

const TabIcon = ({ tintColor }) => <Icon name="home" size={20} color={tintColor} />;

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main: createBottomTabNavigator(
        {
          Product: createStackNavigator(
            {
              Main,
              Detail,
            },
            {
              defaultNavigationOptions: {
                header: null,
              },
              navigationOptions: {
                tabBarIcon: TabIcon,
              },
            },
          ),
          Cart,
        },
        {
          tabBarOptions: {
            showIcon: true,
            showLabel: false,
            activeTintColor: '#f67171',
            inactiveTintColor: '#c1c1c1',
            style: {
              backgroundColor: '#fff',
            },
          },
        },
      ),
    },
    {
      defaultNavigationOptions: {
        header: null,
      },
    },
  ),
);

export default Routes;
