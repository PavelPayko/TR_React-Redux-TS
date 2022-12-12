import { UserAction, UserState } from '../../types/user'

const initialState: UserState = {
	users: [],
	loading: false,
	error: null
}

const FETCH_USERS = 'FETCH_USERS'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'

export const userReducer = (state = initialState, action: UserAction): UserState => {
	switch (action.type) {
		case FETCH_USERS:
			return {
				users: [],
				loading: false,
				error: null
			}
		case FETCH_USERS_SUCCESS:
			return {
				users: action.payload,
				loading: false,
				error: null
			}
		case FETCH_USERS_ERROR:
			return {
				users: [],
				loading: false,
				error: null
			}

		default:
			return state
	}
}