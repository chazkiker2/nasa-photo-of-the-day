export const BASE_URL = "https://api.nasa.gov/planetary/apod";
export const API_KEY = "api_key=69zjmNCTVKnPDeloUvfc75u0g9VTQnP9Fz0Ehiit";
// https://api.nasa.gov/planetary/apod?api_key=69zjmNCTVKnPDeloUvfc75u0g9VTQnP9Fz0Ehiit
// https://api.nasa.gov/planetary/apod\?api_key\=DEMO_KEY\&date\=1995-06-16\?api_key\=DEMO_KEY\&date\=1995-06-16

export const getCurrentDateFormatted = () => {
	const dateObj = new Date();
	const dd = String(dateObj.getDate()).padStart(2,"0");
	const mm = String(dateObj.getMonth()+1).padStart(2,"0");
	const yyyy = String(dateObj.getFullYear());
	return `${yyyy}-${mm}-${dd}`;
}