import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const CardCharacter = () => {

    const { store, actions } = useContext(Context)

    return (
        <>
            {
                store.characters.length > 0 ? (

                    store.characters.map((person, index) => (
                        <div className="card mx-2" key={index} style={{ minWidth: "18rem" }}>
                            <img src={`https://starwars-visualguide.com/assets/img/characters/${person.url.split("/")[5]}.jpg`} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{person.name}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to={`/character/${person.url.split("/")[5]}`} className="btn btn-outline-primary">Go somewhere</Link>
                                <button onClick={() => actions.addFavorite({ uid: person.url.split("/")[5], name: person.name })} className="btn btn-outline-warning ms-2">
                                    <i className="fa-regular fa-heart"></i>
                                </button>
                            </div>
                        </div>
                    ))
                ) :
                    <h1>No characters</h1>
            }

        </>

    )

}

export default CardCharacter;