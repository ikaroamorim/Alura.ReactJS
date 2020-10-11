import React, {Component} from "react"
import './formItems.css'

export default class FormItems extends Component{
  render(){
    return (
      <form>
      <input type="text" placeholder="Título" />
      <textarea placeholder="Escreva sua nota..."></textarea>
      <input type="submit" value="Criar nota" />
      </form>
    )
  }
}