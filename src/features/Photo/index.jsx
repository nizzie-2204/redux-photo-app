import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import MainPage from "./pages/Main/MainPage";
import AddEditPage from "./pages/AddEit/AddEditPage";
import NotFound from "../../components/NotFound";

const Photo = () => {
	const match = useRouteMatch();

	return (
		<Switch>
			<Route exact path={match.url} component={MainPage} />

			<Route path={`${match.url}/add`} component={AddEditPage} />
			<Route path={`${match.url}/:photoId`} component={AddEditPage} />

			<Route component={NotFound} />
		</Switch>
	);
};

export default Photo;
