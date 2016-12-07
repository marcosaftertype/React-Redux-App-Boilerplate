'use strict'

import React from 'react'
import { shallow } from 'enzyme'

import { SquaresGrid } from '../js/components/squares_grid'

const minProps = {
	squaresCount: {
		count: 4
	},
	buttonClicked(){}
}

describe('Component: SquaresGrid', () => {

	const grid = shallow(<SquaresGrid { ...minProps } />)

	it('renders properly, is <div>', () => {
		expect(grid.is('div')).toEqual(true)
	})

	it('contains ul', () => {
		let ul = grid.find('ul')
		expect(ul.length).toEqual(1)
	})

	it('has 4 default squares', () => {
		let ul = grid.find('ul')
		expect(ul.find('Square').length).toEqual(4)
	})

})