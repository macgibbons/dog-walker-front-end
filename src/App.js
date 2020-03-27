import React from "react"
import { Route, Redirect } from "react-router-dom"
import ApplicationViews from "./ApplicationViews"

import "./App.css"
import NavBar from "./Components/NavBar"


export default () => (
    <>
        <Route render={props => <NavBar {...props} />} />
        <Route render={props => <ApplicationViews {...props} />} />
                       

       
    </>
)