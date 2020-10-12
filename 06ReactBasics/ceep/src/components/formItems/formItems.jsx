import React, {Component} from "react"
import './formItems.css'

export default class FormItems extends Component{
  constructor(props){
    super(props)
    this.title=""
    this.text=""
  }
  _handleTitleChange(event){
    event.stopPropagation()
    this.title = event.target.value
    console.log(this.title)
  }
  _handleTextChange(event){
    event.stopPropagation()
    this.text = event.target.value
    console.log(this.text)
  }
  _createNote(event){
    event.preventDefault()
    event.stopPropagation()
    this.props.createNote(this.title, this.text)
  }

  render(){
    return (
      <form onSubmit={this._createNote.bind(this)}>
      <input type="text" placeholder="Título" onChange={this._handleTitleChange.bind(this)} />
      <textarea placeholder="Escreva sua nota..." onChange={this._handleTextChange.bind(this)}></textarea>
      <input type="submit" value="Criar nota" />
      </form>
    )
  }
}