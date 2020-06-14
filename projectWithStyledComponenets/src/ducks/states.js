export const Types = {
	FETCH_REQUEST: '@states/FETCH_REQUEST',
	FETCH_SUCCESS: '@states/FETCH_SUCCESS',
	FETCH_FAILURE: '@states/FETCH_FAILURE',
	// SET_DATE_LAST_REQUEST: '@states/SET_DATE_LAST_REQUEST',
}

const initialState = {
	status: {
		loading: true,
		error: null,
		code: null,
		finished: false,
	},
	data: [],
}

export const selector = (state = initialState) => {
	// console.log('############## STATE', state)
	return state
}

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case Types.FETCH_REQUEST:
			return {
				...state,
			}

		case Types.FETCH_SUCCESS:
			return {
				...state,
				status: {
					loading: false,
					error: false,
					finished: true,
				},
				...action.payload,
			}
		case Types.FETCH_FAILURE:
			return {
				...state,
				status: {
					loading: false,
					error: true,
					finished: true,
				},
			}
	}
}

export function fetchRequest() {
	return {
		type: Types.FETCH_REQUEST,
	}
}

export function fetchSuccess(payload) {
	return {
		type: Types.FETCH_SUCCESS,
		payload,
	}
}
export function fetchFailure() {
	return {
		type: Types.FETCH_FAILURE,
	}
}
