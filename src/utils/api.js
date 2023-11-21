import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com/home/?hl=en&gl=US";

const options = {
	params: {hl: "en", gl: "US"},
	headers: {
		"content-type": "application/octet-stream",
		"X-RapidAPI-Key": "f1ec83dbdamsh6ebfc7358ef1d79p102717jsn24c86fb61859",
		"X-RapidAPI-Host": "youtube138.p.rapidapi.com",
	},
};

export const fetchDataFromApi = async (url) => {
	const {data} = await axios.get(`${BASE_URL}/${url}`, options);
	return data;
};
