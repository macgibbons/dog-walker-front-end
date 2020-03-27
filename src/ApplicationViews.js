import React from "react"
import { WalkerProvider } from "./Components/Walker/WalkerProvider";
import WalkerList from "./Components/Walker/WalkerList";

export default (props) => {
    return (
        <>
        <WalkerProvider>
            <WalkerList /> 
        </WalkerProvider>
           
        </>
    )
}
