import React, { Component } from 'react'
import "./noteItem.css"

export default class NoteItem extends Component {
  render() {
    return (
      <div className="note-body">
        <div className="note-title">
          <h3>{this.props.title}</h3>
        </div>
        <div className="note-content">
          <p>{this.props.text}</p>
        </div>
      </div>
    )
  }
}
