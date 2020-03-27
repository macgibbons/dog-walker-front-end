import React from "react"
import { WalkerProvider } from "./Components/Walker/WalkerProvider";
import WalkerList from "./Components/Walker/WalkerList";
import { DogProvider } from "./Components/Dog/DogProvider";
import DogList from "./Components/Dog/DogList";
import { OwnerProvider } from "./Components/Owner/OwnerProvider";
import OwnerList from "./Components/Owner/OwnerList";

export default (props) => {
    return (
        <>
        <DogProvider>
            <WalkerProvider>
                <OwnerProvider>
                    <OwnerList />
                    <WalkerList /> 
                    <DogList /> 
                </OwnerProvider>
            </WalkerProvider>
        </DogProvider>
           
        </>
    )
}
