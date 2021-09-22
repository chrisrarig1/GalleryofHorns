import React from "react";
import './HornedBeast.css';


class HornedBeast extends React.Component{
//have to add for state
    constructor(props){
        super(props);
        //state must be an object
        this.state = {
            votes: 0,
            Fav: false,
        }
    }
    add = ()=>{
        //how you set state
        this.setState({votes: this.state.votes + 1})
        console.log('voted');
    }

    // favorite = () => {
    //     if(fav === true){

    //     }
    // }
    //ternary statement is if/else rolled into one. evaluation ? true : false

    render(){
    return( 
    <div className='beasts'>
        <h2>{this.props.title}</h2>
        <img src={this.props.image} alt={this.props.keyword} horns={this.props.horns}></img>
        <p>{this.props.description}</p>
        <p>total votes: {this.state.votes}</p>
        <button onClick={this.add}>Vote</button>
    </div>
    )
    }
}

export default HornedBeast;