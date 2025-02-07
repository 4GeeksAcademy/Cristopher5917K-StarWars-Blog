import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

const Vehicles = () => {
    const { store, actios } = useContext(Context)
    const { idVehicles } = useParams()
    const [infoVehicles, setInfoVehicles] = useState(null)

    const findVehicles = () => {
        try {
            const result = store.vehicles.find((item) => item.id == idVehicles)
            setInfoVehicles(result)
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(()=>{
        findVehicles()
    },[store.vehicles])
    return (
        <div className="container pt-4">
            <div className="row" >
                <div className="col-12 col-md-6">
                    <img className="image" src={`https://starwars-visualguide.com/assets/img/vehicles/${infoVehicles?.url.split("/")[5]}.jpg`} />
                </div>
                <div className="col-12 col-md-6">
                    <h1 className="text-center">{infoVehicles?.name}</h1>
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
                    <p>{infoVehicles?.name}</p>
                </div>
                <div className="col-12 col-md-2">
                    <h5 >Model</h5>
                    <p>{infoVehicles?.model}</p>
                </div>
                <div className="col-12 col-md-2">
                    <h5>Capacity</h5>
                    <p>{infoVehicles?.passengers}</p>
                </div>
                <div className="col-12 col-md-2">
                    <h5>Manufacturer</h5>
                    <p>{infoVehicles?.manufacturer}</p>
                </div>
                <div className="col-12 col-md-2">
                    <h5>Cost</h5>
                    <p>{infoVehicles?.cost_in_credits}</p>
                </div>
                <div className="col-12 col-md-2">
                    <h5>Class</h5>
                    <p>{infoVehicles?.vehicle_class}</p>
                </div>

            </div>
        </div>
    )
}
export default Vehicles