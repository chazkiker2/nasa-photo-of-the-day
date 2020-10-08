import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
// import PictureDetails from "./PictureDetails";


const PictureContainer = (props) => {
	const { pictures } = props;
	const { title, date, url, explanation } = pictures;

	const stylePic = {
		display: "flex",
		// width: "40%",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		margin: "0 auto",
	};

	return (
		<div className="pic-container" style={stylePic}>
			<Card style={{width: "40%", margin: "2rem",}}>
				<CardBody>
					<CardTitle style={{fontWeight: "bold", textAlign: "center", fontSize: "2rem"}}>{title}</CardTitle>
					<CardSubtitle style={{fontWeight: "400", textAlign: "center", fontSize: "1.5rem"}}>{date}</CardSubtitle>
				</CardBody>
				<img src={url} alt={title} />
				<CardBody>
					<CardText style={{fontSize: "1.2rem"}}>{explanation}</CardText>
				</CardBody>
			</Card>
			{/* <h3>{title ? title : "title"}</h3>
			<h4>{date ? date : "date"}</h4>
			<img src={url ? url : "src"} alt={title} />
			<PictureDetails about={explanation ? explanation : "explanation"} /> */}
		</div>
	);
};

export default PictureContainer;