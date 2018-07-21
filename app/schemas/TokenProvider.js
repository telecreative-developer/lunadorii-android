const TokenProviderSchema = {
	name: 'TokenProvider',
	primaryKey: 'id',
	properties: {
		id: 'int',
		accessToken: 'string',
		refreshToken: 'string'
	}
}

export default TokenProviderSchema
