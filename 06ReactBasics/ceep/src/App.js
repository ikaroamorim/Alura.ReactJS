import React, { Component } from 'react';
import logo from './logo.svg';
import "./Assets/App.css";
import "./Assets/index.css";
import NoteList from './components/noteList/'
import FormItems from './components/formItems/';

class App extends Component{
  render(){

  
  return (
    <div className="App">
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1>CEEP </h1>
  </header>
  <section className="main">
    <FormItems/>
    <NoteList/>
  </section>
</div>
  )}
}


export default App;
