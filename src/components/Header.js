import React from "react";

const Header = () => {
	const headStyle = {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "60px",
		backgroundColor: "black",
	}

	const h1Style={
		color: "white",
	}
	return (
		<header style={headStyle}>
			<h1 style={h1Style}>NASA Photo of the Day</h1>
		</header>
	);
};

export default Header;