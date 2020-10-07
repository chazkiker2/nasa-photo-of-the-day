import React from "react";

const DateInput = (props) => {
	const {date} = props;

	const styleDiv = {
		display: "flex",
		flexFlow: "row nowrap",
		justifyContent: "center",
		alignItems: "center",
	};

	const styleA = {
		// display: "inline-block",
	};

	const styleH4 = {
		// display: "inline",
	};

	return (
		<div className="date-container" style={styleDiv}>
			<a style={styleA}> ≤ </a>
			<h5 style={styleH4}>{date}</h5>
			<a style={styleA}> ≥ </a>
		</div>
	);
}

export default DateInput;