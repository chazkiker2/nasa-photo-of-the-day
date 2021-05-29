import React from "react";

const DateInput = (props) => {
	const { handleChange, inputValue, handleSubmit } = props;

	const styleDiv = {
		display: "flex",
		flexFlow: "row nowrap",
		justifyContent: "center",
		alignItems: "center",
	};

	return (
		<div className="date-container" style={styleDiv}>
			<h5>Search for Date: (YYYY-MM-DD)</h5>
			<input type="text" value={inputValue} onChange={handleChange} />
			<button onClick={handleSubmit}>Submit</button>
		</div>
	);
}

export default DateInput;