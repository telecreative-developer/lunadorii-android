import React from 'react'
import { AppRegistry } from 'react-native'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { withNetworkConnectivity, createNetworkMiddleware } from 'react-native-offline';
import thunk from 'redux-thunk'
import Reactotron from 'reactotron-react-native'
import rootReducers from './app/reducers'
import AppNavigator from './AppNavigator'
import './ReactotronConfig'

const networkMiddleware = createNetworkMiddleware();

const store = Reactotron.createStore(rootReducers, applyMiddleware(networkMiddleware, thunk))

let App = () => (
	<AppNavigator />
);
  
App = withNetworkConnectivity({
withRedux: true // It won't inject isConnected as a prop in this case
})(App);

const Root = () => (
<Provider store={store}>
	<App />
</Provider>
);

console.disableYellowBox = true
AppRegistry.registerComponent("lunadorii", () => Root);

