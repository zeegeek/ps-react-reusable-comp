import React from 'react';
import PropTypes from 'prop-types';

class ProgressBar extends React.Component {
	getColor = (percent) => {
		if(this.props.percent === 100) return 'green';
		return this.props.percent > 50 ? 'lightgreen' : 'red';
	}

	getWidthOfPercentAsTotalWidth = () => {
		let totalWidth = parseInt(this.props.width * (this.props.percent / 100), 10);
			// return totalWidth + "px"
			return totalWidth
	}

	render(){
		const { percent, width, height } = this.props;
		return (
			<div style={{border: 'solid 1px lightgray', width: width}}>
				<div style={{
					width: this.getWidthOfPercentAsTotalWidth(),
					height,
					backgroundColor: this.getColor(percent)
				}} />
			</div>
		)
	}
}

ProgressBar.propTypes = {
	/** Percent of Progress Complete */
	percent: PropTypes.number.isRequired,

	/** Bar Width */
	width: PropTypes.number.isRequired,

	/** Bar Height */
	height: PropTypes.string
};

ProgressBar.defaultProps = {
	height: '5px'
};

export default ProgressBar;