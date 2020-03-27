
import React from "react"
import './Owners.css';
import { Link } from "react-router-dom"


export default ({history, owner}) => (

    <section className="owner--card">
       
     <div className="owner--card--header">
        <h3 className="owner--title">
              { owner.name }
        </h3>
     </div>

   

    </section>
)

