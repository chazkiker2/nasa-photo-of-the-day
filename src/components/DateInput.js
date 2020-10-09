import React, { useState } from "react";
import styled from "styled-components";

import { Button, Collapse } from "reactstrap";
import DateForm from "./DateForm";

const StyledDateSection = styled.div`
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	Button {
		display: block;
		margin: 1rem;
		width: 10rem;
		height: 4rem;
		background-color: ${pr => pr.theme.nasaRed};
		font-family: ${pr => pr.theme.attrMonoBold.fontFamily};
		font-size: 2rem;
		&:hover {
			background-color: ${pr => pr.theme.lightCreme};
			color: ${pr => pr.theme.nasaRed};
		}
	}
`;


const DateInput = (props) => {
	const [isOpen, setIsOpen] = useState(false);
	const { bind, handleSubmit, handleRandom } = props;
	// <DateForm value={value} bind={bind} reset={reset} handleSubmit={handleSubmit} />

	const toggle = () => {setIsOpen(!isOpen)};

	return (
		<StyledDateSection>
			<Button onClick={handleRandom}>Random</Button>
			<Button onClick={toggle}>Search</Button>
			<Collapse isOpen={isOpen}>
				<DateForm bind={bind} handleSubmit={handleSubmit} />
			</Collapse>
		</StyledDateSection>
	);
}

export default DateInput;


		// <div className="date-container" style={styleDiv}>
		// 	<h5>Search for Date: (YYYY-MM-DD)</h5>
		// 	<input type="text" value={inputValue} onChange={handleChange} />
		// 	<Button color="secondary" onClick={handleSubmit}>Submit</Button>
		// </div>
		// <>
		// 	<Button onClick={toggle}>Search</Button>
			
		// 	<Collapse isOpen={isOpen}>
		// 		{/* <FormGroup style={{ display: "flex", flexFlow: "column nowrap", justifyContent: "center", textAlign: "center", alignItems: "center" }}> */}
		// 			<Label for="searchDate">Search for Date</Label>
		// 			<Input id="searchDate" type="text" placeholder="YYYY-MM-DD" value={inputValue} onInput={handleChange} onChange={handleSubmit}  />
		// 			<Button onClick={handleSubmit}>Submit</Button>
		// 		{/* </FormGroup> */}
		// 	</Collapse>
		// 	<Button onClick={handleRandom}>Random</Button>
		// </>

// import React, { useState } from "react";
// // import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button, Collapse, FormGroup, Label, Input, } from "reactstrap";

// const DateInput = (props) => {
// 	const { handleChange, inputValue, handleSubmit, handleRandom } = props;
// 	const [isOpen, setIsOpen] = useState(false);

// 	const toggle = () => setIsOpen(!isOpen);

// 	const styleDiv = {
// 		display: "flex",
// 		flexFlow: "column nowrap",
// 		justifyContent: "center",
// 		alignItems: "center",
// 	};

// 	return (
// 		// <div className="date-container" style={styleDiv}>
// 		// 	<h5>Search for Date: (YYYY-MM-DD)</h5>
// 		// 	<input type="text" value={inputValue} onChange={handleChange} />
// 		// 	<Button color="secondary" onClick={handleSubmit}>Submit</Button>
// 		// </div>
// 		<div style={styleDiv}>
// 			<Button color="primary" size="lg" onClick={toggle} style={{ margin: "2rem", }}>Search</Button>
			
// 			<Collapse isOpen={isOpen}>
// 				<FormGroup style={{ display: "flex", flexFlow: "column nowrap", justifyContent: "center", textAlign: "center", alignItems: "center" }}>
// 					<Label for="searchDate">Search for Date</Label>
// 					<Input type="text" name="date" id="searchDate" placeholder="YYYY-MM-DD" onChange={handleChange} inputvalue={inputValue} style={{ textAlign: "center" }} />
// 					<Button color="secondary" onClick={handleSubmit} style={{ marginTop: "1rem" }}>Submit</Button>
// 				</FormGroup>
// 			</Collapse>
// 			<Button color="primary" size="lg" onClick={handleRandom} style={{margin: "2rem", }}>Random</Button>
// 		</div>

// 	);
// }

// export default DateInput;