import React, { Component } from 'react';
import NoteItem from '../noteItem/noteItem'
import './noteList.css'

export default class NoteList extends Component {

  render() {
    return (<ul>
      {this.props.notes.map((note,index) => {
        return (
          <li key={index}>
            <NoteItem title={note.title} text={note.text}/>
          </li>
        )
      })}
    </ul>
    )
  }
}