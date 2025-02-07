import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";


const Character = () => {
    const { store, actions } = useContext(Context)
    const { idCharacter } = useParams()
    const [infoCharacter, setInfoCharacter] = useState(null)

    const findCharacter = () => {
        try {
            const result = store.characters.find((item) => item.id == idCharacter)
            console.log(result)
            setInfoCharacter(result)
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        findCharacter()
    }, [store.character, idCharacter])


    // useEffect(() => {
    //     if (store.characters) {
    //         if (store.characters.length > 0 && idCharacter) {
    //             const result = store.character.find((item) => item.url.split("/")[5] == idCharacter)
    //             console.log(result)
    //             setInfoCharacter(result || [])   
    //         }
    //     }
    // }, [store.character, idCharacter])
    return (
        <div className="container pt-4">
            <div className="row" >
                <div className="col-12 col-md-6">
                    <img className="mx-2" src={`https://starwars-visualguide.com/assets/img/characters/${infoCharacter?.url.split("/")[5]}.jpg`} />
                </div>
                <div className="col-12 col-md-6">
                    <h1 className="text-center">{infoCharacter?.name}</h1>
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
                    <h5>Name</h5>
                    <p>{infoCharacter?.name}</p>
                </div>
                <div className="col-12 col-md-2">
                    <h5 >Birth Year</h5>
                    <p>{infoCharacter?.birth_year}</p>
                </div>
                <div className="col-12 col-md-2">
                    <h5>Gender</h5>
                    <p>{infoCharacter?.gender}</p>
                </div>
                <div className="col-12 col-md-2">
                    <h5>Height</h5>
                    <p>{infoCharacter?.height}</p>
                </div>
                <div className="col-12 col-md-2">
                    <h5>Skin Color</h5>
                    <p>{infoCharacter?.skin_color}</p>
                </div>
                <div className="col-12 col-md-2">
                    <h5>Eye Color</h5>
                    <p>{infoCharacter?.eye_color}</p>
                </div>

            </div>
        </div>
    )
}

export default Character;