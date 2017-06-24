import React from 'react';
import TextInputBEM from 'rc-react/TextInputBEM';

/** Optional TextBox */
export default class ExampleOptional extends React.Component {
	render(){
		return (
			<TextInputBEM
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