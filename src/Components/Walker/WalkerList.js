import React, { useContext } from "react"
import { WalkerContext } from "./WalkerProvider";
import Walker from "./Walker";


export default (props) => {
    const { walkers } = useContext(WalkerContext)
    

    return (
        <div className="walker--container">
            <div className="walker--header">
                <div className="header">Walkers</div>
                
            </div>
            <div className="walker--list">

                
            {
               walkers.map(walker => {

                  
                    
                    return <Walker {...props} key={walker.id}  walker={walker}   />
                })                
            }
            
            </div>
        </div>
    )
}   