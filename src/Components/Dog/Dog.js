
import React from "react"
import './Dogs.css';
import { Link } from "react-router-dom"


export default ({history, dog}) => (

    <section className="dog--card">
       
     <div className="dog--card--header">
        <h3 className="dog--title">
              { dog.name }
        </h3>
     </div>

    <div>
            {dog.breed}
    </div>
    <div>
            Owner: {dog.owner.name}
    </div>
    <div>
            {dog.notes}
    </div>

    </section>
)

