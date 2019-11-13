import React, { useState, useEffect, useCallback } from 'react'
import { connect } from 'react-redux'

function User (props) {
	const [ N, setN ] = useState(1)

	const addNum = useCallback(() => setN(N + 1), [ N ])

	useEffect(() => {
		const interval = setInterval(addNum, 1000)
		return () => clearInterval(interval)
	}, [ addNum ]) // 第二个参数 https://zh-hans.reactjs.org/docs/hooks-reference.html#useeffect

	return (
		<div>
			<h1>{props.count}</h1>
			<h1 style={{ color: 'red' }}>{N}</h1>

			<button onClick={ addNum }>
        Click me
			</button>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		count: state
	}
}

export default connect(mapStateToProps)(User)
