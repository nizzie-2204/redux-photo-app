import "./App.css";
import React, { Suspense } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
} from "react-router-dom";
import NotFound from "./components/NotFound";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { Ring } from "react-css-spinners";

const Photo = React.lazy(() => import("./features/Photo"));

function App() {
	return (
		<div className="App">
			<Suspense
				fallback={
					<div className="loading-container">
						<Ring className="loading-spinner" color="#e93b81" size={100} />
					</div>
				}
			>
				<Router>
					<ul>
						<li>
							<Link to="/photos">Go to photo page</Link>
						</li>
						<li>
							<Link to="/photos/add">Go to Add new photo page</Link>
						</li>
						<li>
							<Link to="/photos/123">Go to Edit photo page</Link>
						</li>
					</ul>

					<Switch>
						<Redirect exact from="/" to="/photos" />

						<Route path="/photos" component={Photo} />
						<Route component={NotFound} />
					</Switch>
				</Router>
			</Suspense>
		</div>
	);
}

export default App;
