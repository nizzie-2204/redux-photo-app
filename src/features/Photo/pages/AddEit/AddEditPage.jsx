import React from "react";
import Banner from "../../../../components/Banner/index";
import Images from "../../../../constants/images";
import PhotoForm from "../../components/PhotoForm/PhotoForm";
import { useDispatch } from "react-redux";

const AddEditPage = () => {
	const dispatch = useDispatch();
	return (
		<div className="add-edit-page">
			<Banner
				title="Pick your awesome photos"
				backgroundUrl={Images.ADD_EDIT_BG}
			/>
			<PhotoForm />
		</div>
	);
};

export default AddEditPage;
