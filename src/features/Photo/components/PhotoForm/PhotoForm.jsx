import React from "react";
import { PHOTO_CATEGORY_OPTIONS } from "../../../../constants/global";
import Select from "react-select";
import img from "../../../../assets/images/colorful-bg.jpg";
import "./style.css";

const PhotoForm = () => {
	return (
		<div className="photo-form">
			<div className="photo-form__container">
				<form>
					<div className="input__group">
						<label htmlFor="title">Title:</label>
						<input
							type="text"
							name=""
							id="title"
							placeholder="Eg: Wow nature..."
						/>
					</div>
					<div className="input__group">
						<label htmlFor="category">Category:</label>
						<Select
							className="select__input"
							options={PHOTO_CATEGORY_OPTIONS}
						/>
					</div>
					<div className="input__group input__group--photo">
						<div>
							<label htmlFor="title">Photo:</label>
							<button>Random a photo</button>
						</div>
						<img src={img} alt="" />
					</div>

					<button type="submit">Add to album</button>
				</form>
			</div>
		</div>
	);
};

export default PhotoForm;
