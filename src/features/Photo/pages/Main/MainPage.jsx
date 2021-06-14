import React from "react";
import Banner from "../../../../components/Banner/index";
import { Link } from "react-router-dom";
import "./style.css";
import PhotoList from "../../components/PhotoList/PhotoList";

const MainPage = () => {
	return (
		<div className="main-page">
			<Banner />
			<div className="main-page__link">
				<Link to="/photos/add">Add new photo</Link>
			</div>
			<PhotoList />
		</div>
	);
};

export default MainPage;
