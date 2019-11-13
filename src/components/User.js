import React, { useState, useEffect, useCallback } from 'react'
import { connect } from 'react-redux'

function User (props) {
	const [ N, setN ] = useState(1)

	const addNum = useCallback(() => setN(N + 1), [ N ])

	useEffect(() => {
		console.log(1)
	}, [ N ]) // 第二个参数 https://zh-hans.reactjs.org/docs/hooks-reference.html#useeffect

	return (
		<div>
			<h1>{props.count}</h1>
			<h1 style={{ color: 'red' }}>{N}</h1>

			<button onClick={ addNum }> Click me hooks</button>
			<button onClick={ props.add }> Click me reduxActions</button>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		count: state
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		add: () => dispatch({ type: 'INCREMENT' }),
		mins: () => dispatch({ type: 'DECREMENT' })
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
