import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	align-items: center;
	background-color: ${pr => pr.theme.primaryBlue};
	/* margin-bottom: 0px; */
	h1 {
		display: inline-block;
		font-size: 4rem;
		font-family: ${pr => pr.theme.nasaFont.fontFamily};
		font-weight: 400;
		font-style: normal;
		color: ${pr => pr.theme.nasaRed};
		span {
			color: ${pr => pr.theme.lightCreme};
		}
		&:hover {
			color: ${pr => pr.theme.lightCreme};
			transition: all 0.3s ease-in-out;
			span {
				color: ${pr => pr.theme.nasaRed};
				transition: all 0.3s ease-in-out;
			}
			transition: all 0.3s ease-in-out;
		}
		transition: all 0.3s ease-in-out;
		
	}
	nav {
		display: inline-flex;
		flex-flow: row nowrap;
		justify-content: space-evenly;
		align-items: center;
		a {
			color: ${pr => pr.theme.lightCreme};
			font-family: ${pr => pr.theme.attrMonoBold.fontFamily};
			font-size: 1.6rem;
			padding: 2rem;
			/* margin: 1rem; */
			text-decoration: none;
			&:hover {
				transform: scale(1.1);
				transition: all 0.3s ease-in-out;
				color: ${pr => pr.theme.nasaRed};
			}
			transition: all 0.3s ease-in-out;
		}
	}
`;

const Header = () => {
	return (
		<StyledHeader>
			<h1>N<span>A</span>SA Photo of the Day</h1>
			<nav>
				<a href="https://www.nasa.gov/">NASA Site</a>
				<a href="https://api.nasa.gov/">NASA APIs</a>
			</nav>
		</StyledHeader>
	);
};

export default Header;