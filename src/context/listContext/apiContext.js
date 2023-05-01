import axios from "axios";

import {
	createListFailure,
	createListStart,
	createListSuccess,
	deleteListFailure,
	deleteListStart,
	deleteListSuccess,
	getListsFailure,
	getListsSuccess,
	getListsStart,
} from "./ListAction";

export const getLists = async (dispatch) => {
	dispatch(getListsStart());
	try {
		const res = await axios.get("/list", {
			headers: {
				token: "bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
			},
		});
		dispatch(getListsSuccess(res.data.data));
	} catch (err) {
		dispatch(getListsFailure());
	}
};

//create the list

export const createList = async (list, dispatch) => {
	dispatch(createListStart());
	try {
		const res = await axios.post("/list", list, {
			headers: {
				token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
			},
		});
		dispatch(createListSuccess());
	} catch (err) {
		dispatch(createListFailure());
	}
};

//delete

export const deleteList = async (id, dispatch) => {
	dispatch(deleteListStart());
	try {
		await axios.delete("/lists/" + id, {
			headers: {
				token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
			},
		});
		dispatch(deleteListSuccess(id));
	} catch (err) {
		dispatch(deleteListFailure());
	}
};
