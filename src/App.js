import React, { useState, useEffect } from "react";
import axios from "axios";
import {API_KEY, BASE_URL} from "./constants/index";
import "./App.css";
import Header from "./components/Header/Header";
import DateInput from "./components/DateInput/DateInput";
import PicturesGallery from "./components/Picture/PicturesGallery";
import { findByLabelText } from "@testing-library/react";

console.log(axios);

const App = () => {
	const [pictures, setPictures] = useState([]);
	const [date, setDate] = useState("2020-10-07");
	const [inputValue, setInputValue] = useState("");
	
	// const [currentPic, setCurrentPic] = useState(null);

	// const openDetails = () => {};
	// const closeDetails = () => {};

	const handleChange = e => {
		// const input  = e.target.value;
		const {value} = e.target;
		setInputValue(value);
	};
	const handleReset = () => {
		setDate("2020-10-07");
		setInputValue("");
	};
	const handleSubmit = (e) => {
		alert("Finding Pic of Day for: " + inputValue);
		setDate(inputValue);
		setInputValue(inputValue);
		e.preventDefault();
	}

	useEffect(() => {
		const endpoint = `&date=${date}`
		const queryString = `${BASE_URL}?${API_KEY}${endpoint}`;
		// console.log(queryString);
		const fetchData = () => {
			axios.get(queryString)
				.then(res => {
					setPictures(res.data);
					// console.log(res);
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
			<DateInput date={date} handleReset={handleReset} handleChange={handleChange} handleSubmit={handleSubmit} inputValue={inputValue} />
			<PicturesGallery pictures={pictures} />
			<footer className="footer" style={styleFooter}>
				<h4 style={styleH4}>NASA Photo of the Day</h4>
			</footer>
		</>
	);
};


export default App;
