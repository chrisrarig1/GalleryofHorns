
import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import SelectedBeast from './SelectedBeast';
import Container from 'react-bootstrap/Container';
import data from "./data.json"



class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      data: data,
      showModal: false,
      selBeast: {}
    }
  }


clickModal = () => {
  ((this.state.showModal) ? this.setState({showModal: false}):
  this.setState({showModal:true}));
  this.setState({selBeast: this.props.title});
}

  render(){
    

    return (
      <>
      <Container>
        <Header/>
        <Main data={this.state.data} clickModal={this.clickModal}/>
          <Footer/>
          <SelectedBeast clickModal={this.clickModal} showModal={this.state.showModal} data={this.state.data}/>
      </Container>


      </>
    );
  }
}

export default App;
