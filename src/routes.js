import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import Main from '~/pages/Main';
import Cart from '~/pages/Cart';
import Detail from '~/pages/Detail';

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
