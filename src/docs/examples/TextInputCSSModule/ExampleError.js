import React from 'react';
import TextInputCSSModule from 'rc-react/TextInputCSSModule';

/** Optional TextBox */
export default class ExampleOptional extends React.Component {
	render(){
		return (
			<TextInputCSSModule
				htmlId="example-optional"
				label="First Name"
				name="firstname"
				onChange={() => {}}
				required
				error="First Name is Required"
				placeholder="placeholder"
			/>
		)
	}
}