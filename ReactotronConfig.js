import { reactotronRedux } from 'reactotron-redux'
import Reactotron from 'reactotron-react-native'

Reactotron.configure({ name: 'lunadorii', host:'192.168.1.124', port:9090})
  .useReactNative()
  .use(reactotronRedux())
  .connect()
                                                                      