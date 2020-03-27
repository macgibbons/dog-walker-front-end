
import React, { useContext } from "react"

import { Link } from "react-router-dom"


export default ({walker, history }) => (
    
    <section className="walker--card">
        <div className="walker--card--header">
            <h3 className="walker--title">
                    { walker.name }
            </h3>
        </div>

    </section>
)

