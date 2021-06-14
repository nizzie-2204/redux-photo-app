import { createSlice } from "@reduxjs/toolkit";

const photo = createSlice({
	name: "photos",
	initialState: [],
	reducers: {
		addPhoto: (state, action) => {
			state.push(action.payload);
		},

		removePhoto: (state, action) => {
			return state.filter((item) => {
				return item.id !== action.payload;
			});
		},

		updatePhoto: (state, action) => {
			const { id } = action.payload;
			const indexEditedPhoto = state.findIndex((photo) => {
				return photo.id === id;
			});
			state[indexEditedPhoto] = action.payload;
		},
	},
});

const { actions, reducer } = photo;
export const { addPhoto, removePhoto, updatePhoto } = actions;
export default reducer;
