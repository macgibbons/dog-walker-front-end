import React, { useContext } from "react"
import { DogContext } from "./DogProvider";
import Dog from "./Dog";


export default (props) => {
    const { dogs } = useContext(DogContext)
    

    return (
        <div className="dog--container">
            <div className="dog--header">
                <div className="header">Dogs</div>
                
            </div>
            <div className="dog--list">
     
            { 
               dogs.map(dog => {

                    console.log(`dog: ${dog.name} Breed: ${dog.breed} owner: ${dog.owner.name}`)

                    return <Dog {...props} key={dog.id}  dog={dog}   />
                })                
            }
            
            </div>
        </div>
    )
}   