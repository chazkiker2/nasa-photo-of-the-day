import React from "react";
import PictureContainer from "./PictureContainer";

const PicturesGallery = (props) => {
	const {pictures} = props;

	return (
		<div className="pictures-gallery">
			<PictureContainer pictures={pictures} />
		</div>
	);
};

export default PicturesGallery;