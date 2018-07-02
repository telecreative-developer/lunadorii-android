import { reactotronRedux } from 'reactotron-redux'
import Reactotron from 'reactotron-react-native'

Reactotron.configure({ name: 'lunadorii' })
  .useReactNative()
  .use(reactotronRedux())
  .connect()
                                                                      