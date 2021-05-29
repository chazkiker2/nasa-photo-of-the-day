import React from 'react';


const PictureDetails = (props) => {
	const {about} = props;

	const styleP = {
		maxWidth: "960px",
	};

	return (
		<div style={styleP} className="pic-details">
			<p>{about}</p>
		</div>
	);
};

export default PictureDetails;