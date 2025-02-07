import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


const CardVehicles = () => {
    const { store, actions } = useContext(Context)

    // useEffect(() => {
    //     actions.getVehicles()
    // }, [])
    return (
        <>
            {
                store.vehicles.length > 0 ? (

                    store.vehicles.map((vehicles, index) => (
                        <div className="card mx-2" key={index} style={{minWidth:"18rem"}}>
                            <img src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicles.url.split("/")[5]}.jpg`} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{vehicles.name}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                 <Link to={`/vehicles/${vehicles.url.split("/")[5]}`} className="btn btn-outline-primary">Go somewhere</Link>
                                <button onClick={()=>actions.addFavorite(vehicles)} className="btn btn-outline-warning ms-2"><i className="fa-regular fa-heart"></i></button>
                            </div>
                        </div>
                    ))
                ) :
                    <h1>No Vehicles</h1>
            }
        </>
    )
}

export default CardVehicles