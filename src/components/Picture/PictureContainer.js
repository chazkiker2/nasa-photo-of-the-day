import React, { useState, useEffect } from 'react';
import PictureDetails from "./PictureDetails";
import PicturesGallery from './PicturesGallery';

const PictureContainer = (props) => {
	const {pictures, currentPicId, closeDetails, openDetails} = props;

	// const {title, date, url, explanation} = picData;
	// const getDataByPicture = () => {
	// 	const picData = [];
	// 	pictures.forEach( picture => {
	// 			picData.push({
	// 				title: picture.title,
	// 				date: picture.date,
	// 				url: picture.url,
	// 				explanation: picture.
	// 			})
	// 		}
	// 	)
	// };

	return (
		<div className="pic-container">
			<h3>{pictures.title ? pictures.title : "title"}</h3>
			<h4>{pictures.date ? pictures.date : "date"}</h4>
			<img src={pictures.url ? pictures.url : "src"} />
			<PictureDetails about={pictures.explanation ? pictures.explanation : "explanation"} />
		</div>
	);
};

export default PictureContainer;