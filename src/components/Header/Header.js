import React from "react";

const Header = () => {
	const headStyle = {
		display: "flex",
		flexFlow: "row nowrap",
		justifyContent: "flex-start",
		alignItems: "center",
		height: "60px",
	}
	const imgStyle={
		display: "inline-block",
		margin: "2px",
	}
	const h1Style={
		display: "inline-block",
		fontSize: "12px",
		margin: "2px",
	}
	return (
		<header style={headStyle}>
			<img src="../../nasa-2-logo-png-transparent.png" style={imgStyle} />
			<h1 style={h1Style}>NASA Photo of the Day</h1>
		</header>
	);
};

export default Header;