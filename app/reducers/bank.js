
import { RECEIVE_BANK_USER, RECEIVE_BANK, RECEIVE_BANK_MANIPULATE } from '../constants'

export const userbank = (state = [], action) => {
	switch (action.type) {
		case RECEIVE_BANK_USER:
			return action.payload
		default:
			return state
	}
}

export const manipulatebank = (state = [], action) => {
	switch (action.type) {
		case RECEIVE_BANK_MANIPULATE:
			return action.payload
		default:
			return state
	}
}

export const bank = (state = [], action) => {
	switch (action.type) {
		case RECEIVE_BANK:
			return action.payload
		default:
			return state
	}
}