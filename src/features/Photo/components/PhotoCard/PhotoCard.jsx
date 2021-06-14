import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./style.css";
import { removePhoto } from "../../photoSlice";

const PhotoCard = ({ imgUrl, selectedOption, title, id }) => {
	const dispatch = useDispatch();

	const handleRemovePhoto = (id) => {
		const action = removePhoto(id);
		console.log(action);
		dispatch(action);
	};

	return (
		<div className="photo-card">
			<img src={imgUrl} alt="" className="photo-card__img" />
			<div className="photo-card__content">
				<p>{title}</p>
				<div className="photo-card__actions">
					<Link
						to={`/photos/${id}`}
						type="edit"
						className="photo-card__action photo-card__action--edit"
					>
						Edit
					</Link>
					<button
						type="button"
						className="photo-card__action photo-card__action--remove"
						onClick={() => {
							handleRemovePhoto(id);
						}}
					>
						Remove
					</button>
				</div>
			</div>
		</div>
	);
};

export default PhotoCard;
