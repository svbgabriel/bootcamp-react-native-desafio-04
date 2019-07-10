import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import Main from '~/pages/Main';
import Cart from '~/pages/Cart';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main: createBottomTabNavigator(
        {
          Main,
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
