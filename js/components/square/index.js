// @flow

'use strict'

import React from 'react'
import { connect } from 'react-redux'

import styles from './square.scss'

export default class Square extends React.Component {
	render(){
		return (
			<li className={styles.square}></li>
		)
	}
}