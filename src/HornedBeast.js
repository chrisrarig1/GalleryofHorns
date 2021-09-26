import React from "react";
import './HornedBeast.css';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";




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

    favorite = () => {
       if(this.state.Fav){
            this.setState({Fav: false});
       }else{
            this.setState({Fav: true});
       }
       
    }
    //ternary statement is if/else rolled into one. evaluation ? true : fals 
    render(){
    return( 
    <Row xs={1} md={2} className="g-4">
        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img style={{size: '200px'}} variant="top" onClick={this.props.clickModal}  src={this.props.image} alt={this.props.keyword} horns={this.props.horns}></Card.Img>
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>{this.props.description}{(this.state.Fav) ? '💘'  : ''}</Card.Text>
                    <Card.Text>total votes: {this.state.votes}</Card.Text>
                    <Button variant="primary" onClick={this.add}>Vote</Button>
                </Card.Body>
            </Card>
        </Col>
    </Row>
    )
    }
}


export default HornedBeast;