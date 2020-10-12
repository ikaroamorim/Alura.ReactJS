import React, { Component } from 'react';
import logo from './logo.svg';
import "./Assets/App.css";
import "./Assets/index.css";
import NoteList from './components/noteList/'
import FormItems from './components/formItems/';

class App extends Component{
  constructor(){
    super()
    this.state = {
      notes:[]
    }
  }
  
  createNote(title, text){
    const newNote = {title, text};
    const newNoteArray = [...this.state.notes, newNote]
    const newState = {
      notes: newNoteArray
    }
    this.setState(newState)
   }

  render(){
  return (
    <div className="App">
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1>CEEP </h1>
  </header>
  <section className="main">
    <FormItems createNote={this.createNote.bind(this)}/>
    <NoteList notes={this.state.notes}/>
  </section>
</div>
  )}
}


export default App;
