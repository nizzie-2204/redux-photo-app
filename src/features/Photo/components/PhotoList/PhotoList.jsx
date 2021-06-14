import React from "react";
import { useSelector } from "react-redux";
import PhotoCard from "../PhotoCard/PhotoCard";
import "./style.css";

const PhotoList = () => {
	const photos = useSelector((state) => state.photos);

	return (
		<div className="photo-list">
			<div className="photo-list__container">
				{photos &&
					photos.map((photo) => {
						return <PhotoCard {...photo} />;
					})}
			</div>
		</div>
	);
};

export default PhotoList;
