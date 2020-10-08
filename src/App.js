import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
// CONSTANTS
import {API_KEY, BASE_URL} from "./constants/index";
// STYLE
import "./App.css";
// COMPONENTS
import Header from "./components/Header/Header";
import DateInput from "./components/DateInput/DateInput";
import PictureGallery from "./components/Picture/PictureGallery";

const App = () => {
	const [picture, setPicture] = useState();
	const [date, setDate] = useState("2020-10-07");
	const [inputValue, setInputValue] = useState("");

	const handleChange = (e) => {
		const {value} = e.target;
		setInputValue(value);
	};

	const getRandomInterval = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1) + min);
	};

	const handleRandom = (e) => {
		const randYear = getRandomInterval(1995, 2020);
		const randMonth = getRandomInterval(1, 12);
		const getRandomDay = () => {
			const getMaxDay = () => {
				switch (randMonth) {
					case (1):
						return 31;
					case (2): 
						return 28;
					case (3):
						return 31;
					case (4):
						return 30;
					case (5):
						return 31;
					case (6):
						return 30;
					case (7):
						return 31;
					case (8):
						return 31;
					case (9):
						return 30;
					case (10):
						return 31;
					case (11):
						return 30;
					case (12):
						return 31;
					default:
						return 28;
				}
			}
			return getRandomInterval( ((randYear === 1995) ? 6 : 1), getMaxDay())
		}
		const randDay = getRandomDay();
		const randomDateString = `${String(randYear)}-${String(randMonth).padStart(2,'0')}-${String(randDay).padStart(2,'0')}`;
		setDate(randomDateString);
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
					setPicture(res.data);
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
			<DateInput handleChange={handleChange} handleSubmit={handleSubmit} handleRandom={handleRandom} inputValue={inputValue} />
			<PictureGallery picture={picture} />
			<footer className="footer" style={styleFooter}>
				<h4 style={styleH4}>NASA Photo of the Day</h4>
			</footer>
		</>
	);
};


export default App;
