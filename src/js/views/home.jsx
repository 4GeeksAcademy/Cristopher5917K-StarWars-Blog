import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import CardCharacter from "../component/cardCharacters.jsx"
import CardPlanets from "../component/cardPlanets.jsx";
import CardVehicles from "../component/cardVehicles.jsx";

const Home = () => {
	const { store, actions } = useContext(Context)
	return (
		<>
			<div className="container">

				<h1 className="ps-2">Characters</h1>
				<div className="container mt-3 overflow-auto w-100">
					<div className="d-flex flex-row flex-nowrap">
						<CardCharacter />
					</div>
				</div>

				<h1 className="ps-2">Planets</h1>
				<div className="container mt-3 overflow-auto">
					<div className="d-flex flex-row flex-nowrap">
						<CardPlanets />
					</div>
				</div>

				<h1 className="ps-2">Vehicles</h1>
				<div className="container mt-3 overflow-auto">
					<div className="d-flex flex-row flex-nowrap">
						<CardVehicles />
					</div>
				</div>
			</div>

		</>

	)

};

export default Home