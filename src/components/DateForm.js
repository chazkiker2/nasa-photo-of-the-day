import React from "react";
// import {useInput} from "../hooks/input-hook";

export default function DateForm(props) {
	const {bind, handleSubmit } = props;

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Date:
				<input type="text" placeholder="YYYY-MM-DD" {...bind} />
			</label>
			<input type="submit" value="Submit" onSubmit={(e) => {handleSubmit(e)}} />
		</form>
	);
}