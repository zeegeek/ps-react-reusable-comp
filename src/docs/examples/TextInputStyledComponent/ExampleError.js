import React from 'react';
import TextInputStyledComponent from 'rc-react/TextInputStyledComponent';

/** Optional TextBox */
export default class ExampleOptional extends React.Component {
	render(){
		return (
			<TextInputStyledComponent
				htmlId="example-optional"
				label="First Name"
				name="firstname"
				onChange={() => {}}
				required
				error="First Name is Required"
				placeholder="I am Nothing ZEE :("
			/>
		)
	}
}