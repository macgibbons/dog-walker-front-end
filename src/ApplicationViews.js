import React from "react"
import { WalkerProvider } from "./Components/Walker/WalkerProvider";
import WalkerList from "./Components/Walker/WalkerList";
import { DogProvider } from "./Components/Dog/DogProvider";
import DogList from "./Components/Dog/DogList";

export default (props) => {
    return (
        <>
        <DogProvider>
            <WalkerProvider>
                <WalkerList /> 
                <DogList /> 
            </WalkerProvider>
        </DogProvider>
           
        </>
    )
}
