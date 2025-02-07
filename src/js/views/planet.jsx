import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";


const Planet = () => {
    const { store, actions } = useContext(Context)
    const { idPlanet } = useParams()
    const [planet, setPlanet] = useState(null)

    const findPlanet = () => {
        try {
            const result = store.planets.find((item) => item.id == idPlanet)
            setPlanet(result)
            console.log("ESTA ES EL RESULT"+result)
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(()=>{
        findPlanet()
    },[store.planets])
    return (
        <div className="container">
			<div className="row" >
                <div className="col-12 col-md-6">
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${planet?.url.split("/")[5]==1? Math.floor(Math.random()*10+2):planet?.url.split("/")[5]}.jpg`} />
                </div>
                <div className="col-12 col-md-6">
                    <h1 className="text-center">{planet?.name}</h1>
                    <p className="text-center pt-2" >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptas quia unde
                        deserunt iusto molestias at porro modi, recusandae, quo facilis. Ut error est tenetur
                        nobis vitae sapiente at pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Assumenda voluptas quia unde deserunt iusto molestias at porro modi, recusandae, quo
                        facilis. Ut error est tenetur nobis vitae sapiente at pariatur?
                    </p>
                </div>

            </div>
            <div className="row border-top color text-center mt-5 pt-4">
                <div className="col-12 col-md-2">
                    <h5 >Name</h5>
                    <p>{planet?.name}</p>
                </div>
                <div className="col-12 col-md-2">
                    <h5 >Population</h5>
                    <p>{planet?.population}</p>
                </div>
                <div className="col-12 col-md-2">
                    <h5>Diameter</h5>
                    <p>{planet?.diameter}</p>
                </div>
                <div className="col-12 col-md-2">
                    <h5>Climate</h5>
                    <p>{planet?.climate}</p>
                </div>
                <div className="col-12 col-md-2">
                    <h5>Orbital Period</h5>
                    <p>{planet?.orbital_period}</p>
                </div>
                <div className="col-12 col-md-2">
                    <h5>Rotation Period</h5>
                    <p>{planet?.rotation_period}</p>
                </div>

            </div>
		</div>
    )
}

export default Planet