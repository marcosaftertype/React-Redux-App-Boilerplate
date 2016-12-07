// @flow

'use strict'

export default function buttonClicked() {
	return {
		type: 'BUTTON_CLICKED',
		payload: {
			incrementBy: 1
		}
	}
}