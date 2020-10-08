import React, { useState, useEffect } from "react";
import axios from "axios";
// CONSTANTS
import {API_KEY, BASE_URL} from "./constants/index";
// STYLE
import "./App.css";
// COMPONENTS
import Header from "./components/Header/Header";
import DateInput from "./components/DateInput/DateInput";
import PicturesGallery from "./components/Picture/PicturesGallery";

const App = () => {
	const [pictures, setPictures] = useState([]);
	const [date, setDate] = useState("2020-10-07");
	const [inputValue, setInputValue] = useState("");

	const handleChange = (e) => {
		const {value} = e.target;
		setInputValue(value);
	};

	const handleSubmit = (e) => {
		setDate(inputValue);
		setInputValue(inputValue);
		e.preventDefault();
	}

	useEffect(() => {
		const endpoint = `&date=${date}`
		const queryString = `${BASE_URL}?${API_KEY}${endpoint}`;
		const fetchData = () => {
			axios.get(queryString)
				.then(res => {
					setPictures(res.data);
				})
				.catch(err => {
					debugger;
				})
		};
		fetchData();
	}, [date]);

	const styleFooter = {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "black",
	};
	const styleH4 = {
		color: "white",
	};

	return (
		<>
			<Header />
			<DateInput handleChange={handleChange} handleSubmit={handleSubmit} inputValue={inputValue} />
			<PicturesGallery pictures={pictures} />
			<footer className="footer" style={styleFooter}>
				<h4 style={styleH4}>NASA Photo of the Day</h4>
			</footer>
		</>
	);
};


export default App;
