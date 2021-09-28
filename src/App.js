
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
}

selectTheBeast = (beastTitle) => {
console.log(`selectTheBeast: ${beastTitle}`);
let theBeast = this.state.data.find(item => item.title === beastTitle);
console.log(theBeast);
this.setState({selBeast: theBeast});
this.clickModal();
}

  render(){
    

    return (
      <>
      <Container>
        <Header/>
        <Main data={this.state.data} clickModal={this.clickModal} selectTheBeast={this.selectTheBeast}/>
          <Footer/>
          <SelectedBeast clickModal={this.clickModal} showModal={this.state.showModal} selBeast={this.state.selBeast}/>
      </Container>


      </>
    );
  }
}

export default App;
