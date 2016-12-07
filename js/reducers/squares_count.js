// @flow

'use strict'

const defaults = {
	count: 4
}

export default function(state = defaults, action){

	if (action.type === 'BUTTON_CLICKED'){
		let result = { 
			count: state.count + action.payload.incrementBy
		}

		return {...state, ...result}
	}

	return state
}