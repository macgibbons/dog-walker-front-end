import React, { useState, useEffect } from "react"


export const WalkerContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const WalkerProvider = (props) => {
    const [walkers, setWalkers] = useState([])

    const getWalkers = () => {
        return fetch("http://localhost:5000/api/walker")
            .then(res => res.json())
            .then(setWalkers)
    }

    const addWalker = walker => { 
        return fetch("http://localhost:5000/api/walker", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(walker)
        })
            .then(getWalkers)
    }

    const updateWalker = walker => {
        return fetch(`http://localhost:5000/api/Walkers/${walker.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(walker)
        })
            .then(getWalkers)
    }

    const deleteWalker = walkerId => {
        return fetch(`http://localhost:5000/api/Walkers/${walkerId}`, {
            method: "DELETE"
        })
            .then(getWalkers)
    }
    /*
        Load all Walkers when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getWalkers()
    }, [])

    useEffect(() => {
        console.log("****  Walker APPLICATION STATE CHANGED  ****")
    }, [walkers])

    return (
        <WalkerContext.Provider value={{
            walkers, addWalker, deleteWalker, updateWalker
        }}>
            {props.children}
        </WalkerContext.Provider>
    )
}