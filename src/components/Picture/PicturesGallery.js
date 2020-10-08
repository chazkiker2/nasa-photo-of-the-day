import React from "react";
import PictureContainer from "./PictureContainer";

const PicturesGallery = (props) => {
	const {pictures} = props;

	const styleGal = {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	};

	return (
		<div className="pictures-gallery" style={styleGal}>
			<PictureContainer pictures={pictures} style={styleGal} />
		</div>
	);
};

export default PicturesGallery;