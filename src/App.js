import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import axios from "axios";
// CONSTANTS
import { API_KEY, BASE_URL, getCurrentDateFormatted } from "./constants/index";
// STYLE
import "./App.css";

// COMPONENTS
import Header from "./components/Header";
import DateInput from "./components/DateInput";
import PictureContainer from "./components/PictureContainer";

const App = () => {
	const [picture, setPicture] = useState({});
	const [date, setDate] = useState(getCurrentDateFormatted());
	const [inputValue, setInputValue] = useState("");



	const handleChange = (e) => {
		const { value } = e.target;
		setInputValue(value);
	};

	const getRandomInterval = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1) + min);
	};

	const handleRandom = (e) => {
		const randYear = getRandomInterval(1995, 2020);
		const randMonth = (randYear === 1995)
			? getRandomInterval(6, 12)
			: getRandomInterval(1, 12);
		const getRandomDay = () => {
			const getMaxDay = () => {
				if (randMonth === 2) {
					return 28;
				} else if (randMonth === 4 || 6 || 9 || 11) {
					return 30;
				} else {
					return 31;
				}
				//31 : 1, 3, 5, 7, 8, 10, 12 || 30 : 4, 6, 9, 11 || 28 : 2
			}
			return getRandomInterval(((randYear === 1995) ? 16 : 1), getMaxDay())
		}
		const randDay = getRandomDay();
		const randomDateString = `${String(randYear)}-${String(randMonth).padStart(2, '0')}-${String(randDay).padStart(2, '0')}`;
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

	// const styleFooter = {
	// 	display: "flex",
	// 	justifyContent: "center",
	// 	alignItems: "center",
	// 	backgroundColor: "black",
	// };
	// const styleH4 = {
	// 	color: "white",
	// };

	const StyledContainer = styled.div`
		box-sizing: border-box;
		font-size: 62.5%;
		background-color: ${pr => pr.theme.lightBlue};

		footer {
			display: flex;
		justify-content: center;
		align-items: center;
		background-color: ${pr => pr.theme.primaryBlue};
		font-family: ${pr => pr.theme.nasaFont.fontFamily};
		font-weight: 400;
		font-style: normal;
		margin-bottom: 0px;
		h4 {
			display: block;
			font-size: 3rem;
			font-family: ${pr => pr.theme.nasaFont.fontFamily};
			font-weight: 400;
			font-style: normal;
			color: ${pr => pr.theme.nasaRed};
			margin: 0 auto;
		}
		}
	`;

	return (
		<StyledContainer>
			<Header />
			<DateInput handleChange={handleChange} handleSubmit={handleSubmit} handleRandom={handleRandom} inputValue={inputValue} />
			<PictureContainer picture={picture} />
			<footer className="footer">
				<h4>NASA Photo of the Day</h4>
			</footer>
		</StyledContainer>
	);
};


export default App;
