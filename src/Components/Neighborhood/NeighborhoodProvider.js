import React, { useState, useEffect } from "react"


export const NeighborhoodContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const NeighborhoodProvider = (props) => {
    const [neighborhoods, setNeighborhoods] = useState([])

    const getNeighborhoods = () => {
        return fetch("http://localhost:5000/neighborhoods")
            .then(res => res.json())
            .then(setNeighborhoods)
    }

    const addNeighborhood = neighborhood => { 
        return fetch("http://localhost:5000/Neighborhoods", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(neighborhood)
        })
            .then(getNeighborhoods)
    }

    const updateNeighborhood = neighborhood => {
        return fetch(`http://localhost:5000/neighborhoods/${neighborhood.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(neighborhood)
        })
            .then(getNeighborhoods)
    }

    const deleteNeighborhood = neighborhoodId => {
        return fetch(`http://localhost:5000/neighborhoods/${neighborhoodId}`, {
            method: "DELETE"
        })
            .then(getNeighborhoods)
    }
    /*
        Load all Neighborhoods when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getNeighborhoods()
    }, [])

    useEffect(() => {
        console.log("****  Neighborhood APPLICATION STATE CHANGED  ****")
    }, [neighborhoods])

    return (
        <NeighborhoodContext.Provider value={{
            neighborhoods, addNeighborhood, deleteNeighborhood, updateNeighborhood
        }}>
            {props.children}
        </NeighborhoodContext.Provider>
    )
}