'use strict'

import React from 'react'
import { shallow } from 'enzyme'

import Layout from '../js/components/layout'

describe('Component: Layout', () => {

	const layout = shallow(<Layout />)

	it('renders properly, is <div>', () => {
		expect(layout.is('div')).toEqual(true)
	})

	it('has H1 with default title: Layout Component', () => {
		expect(layout.find('h1').text()).toEqual('Layout Component')
	})

})