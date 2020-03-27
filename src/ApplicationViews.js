import React from "react"
import { WalkerProvider } from "./Components/Walker/WalkerProvider";
import WalkerList from "./Components/Walker/WalkerList";
import { DogProvider } from "./Components/Dog/DogProvider";
import DogList from "./Components/Dog/DogList";
import { OwnerProvider } from "./Components/Owner/OwnerProvider";
import OwnerList from "./Components/Owner/OwnerList";
import { Route } from "react-router-dom";


export default (props) => {
    return (
        <>
        <DogProvider>
            <WalkerProvider>
                <OwnerProvider>
                <Route exact path="/owners" render ={
                            props => <OwnerList {...props} />
                        }/>
                <Route exact path="/walkers" render ={
                            props => <WalkerList {...props} />
                        }/>
                <Route exact path="/dogs" render ={
                            props => <DogList {...props} />
                        }/>
                <Route exact path="/" render ={
                            props => <DogList {...props} />
                        }/>
                </OwnerProvider>
            </WalkerProvider>
        </DogProvider>
           
        </>
    )
}
