import React, { Component } from 'react'
import { connect } from 'react-redux'

class About extends Component {
	render () {
		const { add, mins } = this.props
		return (
			<div>
				<h1>{this.props.count}</h1>
				<button onClick={add}>INCREMENT</button>
				<button onClick={mins}>DECREMENT</button>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		count: state
	}
}

const mapDispatchToProps = (dispatch) => {
	let arr = [ 1, 2, 3 ]
	console.log(arr)
	return {
		add: () => dispatch({ type: 'INCREMENT' }),
		mins: () => dispatch({ type: 'DECREMENT' })
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(About)
