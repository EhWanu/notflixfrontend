import Home from "./pages/home/Home";
import "./app.scss";
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
} from "react-router-dom";

function App() {
	return (
		<Switch>
			<Route path="/about">
				<About />
			</Route>
			<Route path="/users">
				<Users />
			</Route>
			<Route path="/">
				<Home />
			</Route>
		</Switch>
	);
}

export default App;
