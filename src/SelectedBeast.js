import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";

class SelectedBeast extends React.Component{


render(){
return(
    <>
          <Modal show={this.props.showModal} onHide={this.props.clickModal}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {this.props.data.description}
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