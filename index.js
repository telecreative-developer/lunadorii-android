import React from 'react'
import { AppRegistry } from 'react-native'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import Reactotron from 'reactotron-react-native'
import rootReducers from './app/reducers'
import AppNavigator from './AppNavigator'
<<<<<<< HEAD
import './ReactotronConfig.js'
=======
import './ReactotronConfig'
>>>>>>> 5723436451b3e66ebdca96791989efffb3b6287c

const store = Reactotron.createStore(rootReducers, applyMiddleware(thunk))

const App = () => (
	<Provider store={store}>
		<AppNavigator />
	</Provider>
)

console.disableYellowBox = true
AppRegistry.registerComponent("lunadorii", () => App);

