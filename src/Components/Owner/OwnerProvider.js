import React, { useState, useEffect } from "react"


export const OwnerContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const OwnerProvider = (props) => {
    const [owners, setOwners] = useState([])

    const getOwners = () => {
        return fetch("http://localhost:5000/api/owner")
            .then(res => res.json())
            .then(setOwners)
    }

    const addOwner = owner => { 
        return fetch("http://localhost:5000/api/owner", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(owner)
        })
            .then(getOwners)
    }

    const updateOwner = owner => {
        return fetch(`http://localhost:5000/api/owner/${owner.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(owner)
        })
            .then(getOwners)
    }

    const deleteOwner = ownerId => {
        return fetch(`http://localhost:5000/api/Owner/${ownerId}`, {
            method: "DELETE"
        })
            .then(getOwners)
    }
    /*
        Load all Owners when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getOwners()
    }, [])

    useEffect(() => {
        console.log("****  Owner APPLICATION STATE CHANGED  ****")
    }, [owners])

    return (
        <OwnerContext.Provider value={{
            owners, addOwner, deleteOwner, updateOwner
        }}>
            {props.children}
        </OwnerContext.Provider>
    )
}