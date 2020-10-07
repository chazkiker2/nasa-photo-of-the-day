import React, { useState, useEffect } from 'react';


const PictureDetails = (props) => {
	const {about} = props;
	return (
		<div className="pic-details">
			<p>{about}</p>
		</div>
	);
};

export default PictureDetails;