import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';

class SelectedBeast extends React.Component{


render(){
return(
    <>
          <Modal show={this.props.showModal} onHide={this.props.clickModal}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.selBeast.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Card style={{ width: 'auto'}}>
                <Card.Img style={{size: '200px'}} variant="top"  src={this.props.selBeast.image_url} alt={this.props.selBeast.keyword} ></Card.Img>
                <Card.Body>
                    <Card.Text>{this.props.selBeast.description}</Card.Text>
                    <Card.Text>Horns = {this.props.selBeast.horns}</Card.Text>
                </Card.Body>
            </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={this.props.clickModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
</>
)}
}

export default SelectedBeast;