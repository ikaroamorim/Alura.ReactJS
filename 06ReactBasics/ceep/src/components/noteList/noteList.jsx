import React, { Component } from 'react';
import NoteItem from '../noteItem/noteItem'
import './noteList.css'

export default class NoteList extends Component {
  render() {
    return (<ul>
      {Array.of("Trabalho", "Estudo", "Vida Pessoal", "Estudo", "Trabalho").map((categoria, index) => {
        return (
          <li key={index}>
            <p>{categoria}</p>
            <NoteItem />
          </li>
        )
      })}
    </ul>
    )
  }
}