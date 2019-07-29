import React from 'react';
import { Provider } from 'react-redux';
import CodePush from 'react-native-code-push';
import '~/config/ReactotronConfig';
import '~/config/StatusBarConfig';
import Routes from '~/routes';
import store from '~/store';

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default CodePush({
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
})(App);
