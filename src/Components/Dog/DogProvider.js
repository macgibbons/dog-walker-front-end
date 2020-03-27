import React, { useState, useEffect } from "react"


export const DogContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const DogProvider = (props) => {
    const [dogs, setDogs] = useState([])

    const getDogs = () => {
        return fetch("http://localhost:5000/api/dog")
            .then(res => res.json())
            .then(setDogs)
    }

    const addDog = dog => { 
        return fetch("http://localhost:5000/api/dog", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dog)
        })
            .then(getDogs)
    }

    const updateDog = dog => {
        return fetch(`http://localhost:5000/api/dog/${dog.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dog)
        })
            .then(getDogs)
    }

    const deleteDog = dogId => {
        return fetch(`http://localhost:5000/api/dog/${dogId}`, {
            method: "DELETE"
        })
            .then(getDogs)
    }
    /*
        Load all Dogs when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getDogs()
    }, [])

    useEffect(() => {
        console.log("****  Dog APPLICATION STATE CHANGED  ****")
    }, [dogs])

    return (
        <DogContext.Provider value={{
            dogs, addDog, deleteDog, updateDog
        }}>
            {props.children}
        </DogContext.Provider>
    )
}