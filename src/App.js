import React, { Component } from 'react';
import './App.css';
import Form from './components/Form'
import Table from './components/Table'
import PropTypes from 'prop-types'

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  
  state={
    usuarios: [],
    name: '',
    lastname: '',
    gamesPlayed: 0,
    hide: false,
    errorMessage: ''
  }

  addUser = () => {
    const id = Math.floor((Math.random() * 100) + 1);
    console.log(this.state.usuarios);
    
    let success = this.state.usuarios.filter(item => {
    	return item.name === this.state.name && item.lastname === this.state.lastname;
    });
    
    if(success.length > 0){
    	this.setState({
          errorMessage: 'User already exists'
        })
    }
    else{
     	this.setState(previousState => ({
      usuarios: [...previousState.usuarios, {name: this.state.name, gamesPlayed: this.state.gamesPlayed, id: id, lastname:this.state.lastname}]
    }));
      	this.setState({
          	errorMessage: ''	
        });
    }
                                   
    
  }

  updateForm = (e) => {
    if(e.target.name === 'name'){
     	 this.setState({name: e.target.value});
    }
    if(e.target.name === 'number-games'){
     	this.setState({gamesPlayed: e.target.value}); 
    }
    if(e.target.name === 'lastname'){
    	this.setState({lastname: e.target.value}); 
    }

  }

  isEmpty = () => {
    return this.state.name === '';
  }

  changeHide = () => {
  	let value = this.state.hide;
    value === true ? value = false : value = true;
    this.setState({
    	hide: value
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Number of Games Web</h1>
        </header>
      	<div className="container">
          <Form addUser={this.addUser} name={this.state.name} gamesPlayed={this.state.gamesPlayed} usuarios={this.state.usuarios} updateForm={this.updateForm} isEmpty={this.isEmpty} changeHide={this.changeHide} lastname={this.state.lastname} errorMessage={this.state.errorMessage}></Form>
          <Table usuarios={this.state.usuarios} hide={this.state.hide}></Table>
     	</div>
      </div>
    );
  }
}


export default App;
