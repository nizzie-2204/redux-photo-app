import React from "react";
import { Link } from "react-router-dom";
import { FcPhotoReel } from "react-icons/fc";
import "./style.css";

const Header = () => {
	return (
		<header className="header">
			<div className="header__container">
				<div className="header__row">
					<Link to="/">Redux project</Link>
					<FcPhotoReel />
				</div>
			</div>
		</header>
	);
};

export default Header;
