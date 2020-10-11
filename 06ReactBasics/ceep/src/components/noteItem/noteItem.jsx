import React, { Component } from 'react'
import "./noteItem.css"

export default class NoteItem extends Component {
  render() {
    return (
      <div className="note-body">
        <div className="note-title">
          <h3>Título</h3>
        </div>
        <div className="note-content">
          <p>Escreva sua Nota</p>
        </div>
      </div>
    )
  }
}
