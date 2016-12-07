'use strict'

import React from 'react'
import { shallow } from 'enzyme'

import Square from '../js/components/square'

describe('Component: Square', () => {

	const square = shallow(<Square />)

	it('renders properly, is <li>', () => {
		expect(square.is('li')).toEqual(true)
	})

	it('is empty by default', () => {
		expect(square.text()).toEqual('')
	})

})