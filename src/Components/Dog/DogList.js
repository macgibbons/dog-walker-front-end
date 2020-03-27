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

                    console.log(`${dog.name}, ${dog.breed}`)
                    return <Dog {...props} key={dog.id}  Dog={dog}   />
                })                
            }
            
            </div>
        </div>
    )
}   