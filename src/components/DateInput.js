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