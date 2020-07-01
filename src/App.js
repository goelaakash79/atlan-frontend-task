import React from "react";
// import Header from "./components/Header";
// import PrimaryMain from "./components/PrimaryMain";
// import RunsChart from "./components/RunsChart";
// import Footer from "./components/Footer";

const PrimaryMain = React.lazy(() => import("./components/PrimaryMain.js"));
const Header = React.lazy(() => import("./components/Header.js"));
const RunsChart = React.lazy(() => import("./components/RunsChart.js"));
const Footer = React.lazy(() => import("./components/Footer.js"));

function App() {
	return (
		<React.Suspense fallback={<div>loading ...</div>}>
			<Header />
			<PrimaryMain />
			<RunsChart />
			<Footer />
		</React.Suspense>
	);
}

export default App;
