import React, { useContext, useRef } from "react"
import { WalkerContext } from "./WalkerProvider"
import "./Walkers.css"



export default props => {
    const { addWalker } = useContext(WalkerContext)
    
    const walkerName = useRef("")
    const walkerLocation = useRef(0)

    const constructNewWalker = () => {
        // const locationId = parseInt(WalkerLocation.current.value)
            const locationId = 1
            
        if (locationId === 0) {
            window.alert("Please select a location")
        } else {
            addWalker({
                name: walkerName.current.value,
                locationId: locationId
            })
        }
    }

    const updateApplicationView = () => {
        props.history.push("/Walkers")
    }
               
              
    

    return (
        <form className="WalkerForm">
            <h2 className="WalkerForm__title">New Walker</h2>
            <div className="form-group">
                <input
                    type="text"
                    id="walkerName"
                    ref={walkerName}
                    required
                    autoFocus
                    className="form-control"
                    placeholder="name..."
                />
                
            </div>
            {/* <div className="form-group">
                <select
                    defaultValue=""
                    name="location"
                    ref={WalkerLocation}
                    id="WalkerLocation"
                    className="form-control"
                >
                    <option value="0">Select a location</option>
                    {locations.map(e => (
                        <option key={e.id} value={e.id}>
                            {e.name}
                        </option>
                    ))}
                </select>
            </div> */}
            <button type="submit"
                onClick={
                    evt => {
                        evt.preventDefault() // Prevent browser from submitting the form
                        constructNewWalker();
                        props.history.push("/Walkers")
                    }
                }
              
               
                className="btn btn-primary form-group">
                Save Walker
            </button>
        </form>
    )
}