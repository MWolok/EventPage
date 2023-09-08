import Footer from "./components/Footer";
import Header from "./components/Header";
import RaceInfo from "./components/raceInfo/RaceInfo";
import Carrousel from "./components/carusel/Carrousel";
import CarrouselContainer from "./components/carusel/CarrouselContainer";

function App() {
	return (
		<div className="App">
			<Header />
			<>
				<CarrouselContainer></CarrouselContainer>
			</>
			<>
				<RaceInfo></RaceInfo>
			</>

			<div style={{ backgroundColor: "blue", height: "700px" }}></div>
			<div style={{ backgroundColor: "black", height: "700px" }}></div>
			<div style={{ backgroundColor: "yelow", height: "700px" }}></div>
			<div style={{ backgroundColor: "green", height: "700px" }}></div>
			<Footer></Footer>
		</div>
	);
}

export default App;
