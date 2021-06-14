import React from "react";
import "./style.css";
import firework from "../../assets/images/2071392.png";

const Banner = ({ title, backgroundUrl }) => {
	const bannerStyle = backgroundUrl
		? {
				backgroundImage: `url(${backgroundUrl})`,
		  }
		: {};

	return (
		<div className="banner" style={bannerStyle}>
			<div className="banner__content">
				<div className="banner__title">
					<h2>{title ? title : "Your awesome photos"}</h2>
					<img src={firework} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Banner;
