// @flow

'use strict'

export default function squareClicked(squarePos) {
	return {
		type: 'SQUARE_CLICKED',
		payload: {
			squarePos
		}
	}
}