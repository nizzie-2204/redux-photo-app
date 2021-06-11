import React from "react";
import Banner from "../../../../components/Banner";
import Images from "../../../../constants/images";
import PhotoForm from "../../components/PhotoForm/PhotoForm";

const AddEditPage = () => {
	console.log(Images);
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
