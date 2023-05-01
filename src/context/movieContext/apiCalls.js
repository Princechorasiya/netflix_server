import {
	getMovieStart,
	getMovieFailure,
	getMovieSuccess,
	deleteMovieStart,
	deleteMovieFailure,
	deleteMovieSuccess,
	createMovieStart,
	createMovieFailure,
	createMovieSuccess,
} from "./movieAction";
import axios from "axios";

export const getMovies = async (dispatch) => {
	dispatch(getMovieStart());
	try {
		const res = await axios.get("/movies", {
			headers: {
				token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
			},
		});
		dispatch(getMovieSuccess(res.data.data));
		// console.log(res.data.data);
	} catch (err) {
		dispatch(getMovieFailure());
	}
};

export const deleteMovie = async (id, dispatch) => {
	dispatch(deleteMovieStart());
	try {
		await axios.delete("/movies/" + id, {
			headers: {
				token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
			},
		});
		dispatch(deleteMovieSuccess(id));
	} catch (err) {
		dispatch(deleteMovieFailure());
	}
};

export const createMovie = async (movie, dispatch) => {
	dispatch(createMovieStart());

	try {
		const res = await axios.post("/movies", movie, {
			headers: {
				token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
			},
		});
		dispatch(createMovieSuccess(res.data.data));
	} catch (err) {
		dispatch(createMovieFailure());
	}
};
