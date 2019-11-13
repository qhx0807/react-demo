import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

function Home () {
	const state = useSelector(state => state)
	const dispatch = useDispatch()

	const increment = useCallback(
		() => dispatch({ type: 'INCREMENT' }),
		[ dispatch ]
	)

	return (
		<div>
			<h1>{ state }</h1>
			<button onClick={ increment }>add button</button>
		</div>
	)
}

export default Home
