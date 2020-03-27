import React from "react"
import { Route, Redirect } from "react-router-dom"
import ApplicationViews from "./ApplicationViews"
// import NavBar from "./nav/NavBar"

import "./App.css"


export default () => (
    <>
        
                            <Route render={props => <ApplicationViews {...props} />} />
                       

       
    </>
)