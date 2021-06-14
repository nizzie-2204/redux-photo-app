import React, { useState } from "react";
import Select from "react-select";
import "./style.css";
import axios from "axios";
import { PHOTO_CATEGORY_OPTIONS } from "../../../../constants/global";
import { addPhoto, updatePhoto } from "../../photoSlice";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useHistory, useParams } from "react-router-dom";

const PhotoForm = () => {
	const [errorSelect, setErrorSelect] = useState(null);
	const [errorImg, setErrorImg] = useState(null);
	const history = useHistory();
	const dispatch = useDispatch();
	const { photoId } = useParams();
	const isAddMode = !photoId;
	const editedPhoto = useSelector((state) =>
		state.photos.find((photo) => photo.id === photoId)
	);
	const [formValue, setFormValue] = useState(
		isAddMode
			? {
					title: "",
					selectedOption: null,
					imgUrl: null,
			  }
			: {
					...editedPhoto,
			  }
	);

	const handleChangeSelect = (selectedOption) => {
		setFormValue({ ...formValue, selectedOption: selectedOption });
	};

	const handleChangeTitle = (e) => {
		setFormValue({ ...formValue, title: e.target.value });
	};

	const handleRandomPhoto = async () => {
		const randomIdPhoto = Math.round(Math.random() * 1100);
		try {
			const randomPhoto = await axios.get(
				`https://picsum.photos/id/${randomIdPhoto}/300/300`
			);

			setFormValue({ ...formValue, imgUrl: randomPhoto.config.url });
		} catch (error) {
			return handleRandomPhoto();
		}
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		if (formValue.selectedOption === null) {
			setErrorSelect("This field is required.");
			return;
		} else setErrorSelect(null);

		if (imgUrl === null) {
			setErrorImg("Please pick a random photo.");
			return;
		} else setErrorImg(null);

		if (isAddMode) {
			const photoValue = {
				...formValue,
				id: uuidv4(),
			};
			const action = addPhoto(photoValue);
			dispatch(action);
			history.push("/photos");
		} else {
			const photoValue = {
				...formValue,
				id: photoId,
			};
			const action = updatePhoto(photoValue);
			dispatch(action);
			history.push("/photos");
		}
	};

	const { title, selectedOption, imgUrl } = formValue;

	return (
		<div className="photo-form">
			<div className="photo-form__container">
				<form onSubmit={handleOnSubmit}>
					<div className="input__group">
						<label htmlFor="title">Title:</label>
						<input
							type="text"
							value={title}
							onChange={handleChangeTitle}
							id="title"
							placeholder="Eg: Wow nature..."
							required
						/>
					</div>
					<div className="input__group">
						<label htmlFor="category">Category:</label>
						<Select
							className="select__input"
							options={PHOTO_CATEGORY_OPTIONS}
							value={selectedOption}
							onChange={handleChangeSelect}
						/>
					</div>
					{errorSelect ? (
						<p className="error__select">
							<span>{errorSelect}</span>
						</p>
					) : null}
					<div className="input__group input__group--photo">
						<div>
							<label htmlFor="title">Photo:</label>
							<button type="button" onClick={handleRandomPhoto}>
								Random a photo
							</button>
						</div>
						{errorImg ? (
							<p className="error__select">
								<span>{errorImg}</span>
							</p>
						) : null}
						<img src={imgUrl} alt="Opps..." />
					</div>

					<button type="submit" onSubmit={handleOnSubmit}>
						{isAddMode ? "Add to album" : "Edit photo"}
					</button>
				</form>
			</div>
		</div>
	);
};

export default PhotoForm;
