import React from "react";
import Banner from "../../../../components/Banner";
import { Link } from "react-router-dom";
import "./style.css";

const MainPage = () => {
	return (
		<div className="main-page">
			<Banner />

			<div className="main-page__link">
				<Link to="/photos/add">Add new photo</Link>
			</div>
		</div>
	);
};

export default MainPage;
