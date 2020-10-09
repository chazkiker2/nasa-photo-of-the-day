import React from "react";
import {useInput} from "../hooks/input-hook";

export default function DateForm(props) {
	const {value, bind, reset, handleSubmit } = props;

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Name:
				<input type="text" {...bind} />
			</label>
			<input type="submit" value="Submit" onSubmit={(e) => {handleSubmit(e)}} />
		</form>
	);
}