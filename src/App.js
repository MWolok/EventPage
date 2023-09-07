import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
	return (
		<div className="App">
			<Header />
			<div style={{ backgroundColor: "blue", height: "700px" }}></div>
			<div style={{ backgroundColor: "black", height: "700px" }}></div>
			<div style={{ backgroundColor: "yelow", height: "700px" }}></div>
			<div style={{ backgroundColor: "green", height: "700px" }}></div>
      <Footer></Footer>
		</div>
	);
}

export default App;
