import React from 'react';
import TextInput from 'rc-react/TextInput';

/** Optional TextBox */
export default class ExampleOptional extends React.Component {
	render(){
		return (
			<TextInput
				htmlId="example-optional"
				label="First Name"
				name="firstname"
				onChange={() => {}}
				required
				error="First Name is Required"
				className="zee"
				placeholder="I am Nothing ZEE :("
			/>
		)
	}
}