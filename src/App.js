
import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import SelectedBeast from './SelectedBeast';
import Container from 'react-bootstrap/Container';
import data from "./data.json"
import Form from "react-bootstrap/Form";



class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      data: data,
      showModal: false,
      selBeast: {},
      filterBeast : data
    }
  }


clickModal = () => {
  ((this.state.showModal) ? this.setState({showModal: false}):
  this.setState({showModal:true}));
}

selectTheBeast = (beastTitle) => {
let theBeast = this.state.data.find(item => item.title === beastTitle);
this.setState({selBeast: theBeast});
this.clickModal();
}

handleChange = (event) => {
  let filBeast = this.state.data.filter((item) => {
     if (event.target.value === "Alot"){
      return (item.horns > 3)
     }
     else if (event.target.value === "All"){
       return(item.horns)
     }
     else{
    return (item.horns === Number(event.target.value))
     }
  });
  console.log(filBeast);
  this.setState({filterBeast :filBeast });
}


  render(){
    

    return (
      <>
      <Container>
        <Header />
        
        <Form.Select aria-label="Default select example" name="horns" id="horns" onChange={this.handleChange} size='lg' >
            <option value="All">Filter by Horns</option>
            <option value='1'>One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="Alot">Alot</option>
        </Form.Select>
        
        <Main data={this.state.filterBeast} clickModal={this.clickModal} selectTheBeast={this.selectTheBeast} />
          <Footer/>
          <SelectedBeast clickModal={this.clickModal} showModal={this.state.showModal} selBeast={this.state.selBeast}/>
      </Container>


      </>
    );
  }
}

export default App;
