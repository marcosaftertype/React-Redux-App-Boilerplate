// @flow

'use strict'

import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Square from '../square'
import styles from './squares_grid.scss'

import buttonClicked from '../../actions/button_click'

// Export dumb component for unit testing
export class SquaresGrid extends React.Component {

	buildGrid(){
		let squares = []
		let squaresCount = this.props.squaresCount.count

		for (let i = 0; i < squaresCount; i++) {
			squares.push(<Square key={i} />)
		}

		return squares
	}

	addSquare(){
		this.props.buttonClicked()
	}

	render(){
		return (
			<div>
				<ul className={styles.squares_grid}>
					{this.buildGrid()}
				</ul>
				<a className={styles.add_button} onClick={this.addSquare.bind(this)}>Add Square</a>
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		squaresCount: state.squaresCount
	}
}

function matchDispatchToProps(dispatch){
	return bindActionCreators({buttonClicked}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(SquaresGrid)