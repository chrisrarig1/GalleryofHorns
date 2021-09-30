import React from "react";
import HornedBeast from "./HornedBeast.js";
import CardGroup from "react-bootstrap/CardGroup";

class Main extends React.Component{
// set functions


    render(){
        //set variables
        
        let beasts = this.props.data.map((pics, idx) =>
            <HornedBeast 
            key={idx} 
            title={pics.title} 
            image={pics.image_url}
            horns={pics.horns} 
            alt={pics.alt} 
            description={pics.description} 
            clickModal={this.props.clickModal}
            selectTheBeast={this.props.selectTheBeast}
            />
        )
        return(
            <>
                
                <CardGroup>
                    {beasts}
                </CardGroup>
            </>
        )
    }
}

export default Main;