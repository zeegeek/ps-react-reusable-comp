import React from 'react';
import PropTypes from 'prop-types'

/** A Super lame component that says Hello React */
const HelloWorld = ({message}) => {
	return (
		<div>
			Hello, {message}
		</div>
	)
}

HelloWorld.propTypes = {
	/** Message to display */
	message: PropTypes.string
}

HelloWorld.defaultProps = {
	message : "React"
}

export default HelloWorld;