import React from 'react';
import PictureDetails from "./PictureDetails";


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
			<h3>{title ? title : "title"}</h3>
			<h4>{date ? date : "date"}</h4>
			<img src={url ? url : "src"} alt={title} />
			<PictureDetails about={explanation ? explanation : "explanation"} />
		</div>
	);
};

export default PictureContainer;