import React from 'react';
import styled from "styled-components";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
// import PictureDetails from "./PictureDetails";

const StyledPic = styled.div`
	display: flex;
	max-width: 60%;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	Card {
		display: flex;
		flex-direction: row wrap;

		CardBody {
			display: inline-block;
			margin: 0 auto;
			width: 40%;
			CardTitle {
				font-size: 2rem;
			}
		}

		img {
			max-width: 400px;
			width: 20px;
		}
	}
`;


const PictureContainer = (props) => {
	const { picture } = props;
	const { title, date, url, explanation } = picture;

	return (
		<StyledPic className="pic-container">
			<Card>
				<CardBody>
					<CardTitle>{title}</CardTitle>
					<CardSubtitle>{date}</CardSubtitle>
				</CardBody>
				<img src={url} alt={title} />
				<CardBody>
					<CardText>{explanation}</CardText>
				</CardBody>
			</Card>
		</StyledPic>
	);
};

export default PictureContainer;