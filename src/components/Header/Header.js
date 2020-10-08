import React from "react";

const Header = () => {
	const headStyle = {
		display: "flex",
		flexFlow: "row nowrap",
		justifyContent: "center",
		alignItems: "center",
		height: "60px",
		backgroundColor: "black",
	}

	const h1Style={
		display: "inline-block",
		// fontSize: "12px",
		color: "white",
		margin: "2px",
	}
	return (
		<header style={headStyle}>
			<h1 style={h1Style}>NASA Photo of the Day</h1>
		</header>
	);
};

export default Header;