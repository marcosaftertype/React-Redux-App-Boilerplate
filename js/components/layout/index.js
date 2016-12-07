// @flow

'use strict'

import React from 'react'
import styles from './layout.scss'

import SquaresGrid from '../squares_grid'

const config = require('json!../../../config')

export default class Layout extends React.Component {
	render(){
		return (
			<div className={styles.layout}>
				<h1>Layout Component</h1>
				<p>Env from root/config.js: {config.env}</p>
				<SquaresGrid />
			</div>
		)
	}
}