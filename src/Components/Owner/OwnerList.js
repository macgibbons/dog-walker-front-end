import React, { useContext } from "react"
import { OwnerContext } from "./OwnerProvider";
import Owner from "./Owner";



export default (props) => {
    const { owners } = useContext(OwnerContext)
    

    return (
        <div className="owner--container">
            <div className="owner--header">
                <div className="header">Owners</div>
                
            </div>
            <div className="owner--list">
     
            { 
               owners.map(owner => {

                    return <Owner {...props} key={owner.id}  owner={owner}   />
                })                
            }
            
            </div>
        </div>
    )
}   