import Realm from 'realm'
import TokenProviderSchema from './TokenProvider'

const realm = new Realm({ schema: [TokenProviderSchema] })

export default realm
