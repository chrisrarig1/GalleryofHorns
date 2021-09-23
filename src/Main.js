import React from "react";
import HornedBeast from "./HornedBeast.js";
import data from './data.json'

class Main extends React.Component{
// set functions


    render(){
        //set variables
        let beasts =[];
        data.forEach((pics, idx) =>{
            beasts.push(
                <HornedBeast key={idx} title={pics.title} image={pics.image_url} alt={pics.alt} description={pics.description} />
            )
        })
        return(
            <>
                {beasts}
            </>
        )
    }
}

export default Main;