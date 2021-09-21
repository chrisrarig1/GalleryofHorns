import React from "react";
import HornedBeast from "./HornedBeast";

class Main extends React.Component{
    render(){
        return(
            <>
                <HornedBeast title="A Beast" imageUrl="https://via.placeholder.com/150" description="beast" />
                <HornedBeast title="Another" imageUrl="https://via.placeholder.com/150" description="bunch"  />
            </>
        )
    }
}

export default Main;