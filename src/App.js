import React, { useState, useEffect } from "react";
import axios from "axios";
import {API_KEY, BASE_URL} from "./constants/index";
import "./App.css";
import Header from "./components/Header/Header";
import DateInput from "./components/DateInput/DateInput";
import PicturesGallery from "./components/Picture/PicturesGallery";

console.log(axios);

const App = () => {
	const [pictures, setPictures] = useState([]);
	const [date, setDate] = useState("2020-10-07");
	
	// const [currentPic, setCurrentPic] = useState(null);

	// const openDetails = () => {};
	// const closeDetails = () => {};

	useEffect(() => {
		const endpoint = `&date=${date}`
		const queryString = `${BASE_URL}?${API_KEY}${endpoint}`;
		console.log(queryString);
		const fetchData = () => {
			axios.get(queryString)
				.then(res => {
					setPictures(res.data);
					console.log(res);
				})
				.catch(err => {
					debugger;
				})
		};
		fetchData();
	}, [])

	return (
		<>
			<Header />
			<DateInput date={date} />
			<PicturesGallery pictures={pictures} />
			<footer className="footer">
				<h4>NASA Photo of the Day</h4>
			</footer>
		</>
	);
};


export default App;
