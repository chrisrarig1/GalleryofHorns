import React from "react";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";






class HornedBeast extends React.Component{

    constructor(props){
        super(props);
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


    render(){
    return( 
        
    <Row xs={1} md={2} className="g-4">
        <Col>
            <Card border="dark" style={{ width: '18rem', margin:"1rem"}}>
                <Card.Img style={{width:'auto', height:'auto'}} variant="top" onClick={() => this.props.selectTheBeast(this.props.title)}  src={this.props.image} alt={this.props.keyword} ></Card.Img>
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>{this.props.description} </Card.Text>
                    <Card.Text> horns= {this.props.horns} </Card.Text>
                    <Card.Text>total votes: {this.state.votes}</Card.Text>
                    <Button variant="primary" onClick={this.add}>Vote 💘 </Button>
                </Card.Body>
            </Card>
        </Col>
    </Row>
    )
    }
}


export default HornedBeast;