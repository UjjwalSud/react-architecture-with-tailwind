import React from "react";
import AllRoutes from "./routes/Routes";
import { ToastContainer } from "react-toastify";

const App = () => {
	return (
		<React.Fragment>
			<ToastContainer />
			<AllRoutes />
		</React.Fragment>
	)
}


export default App;
