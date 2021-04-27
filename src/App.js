import React, { useEffect, useState } from 'react';
import './App.css';
import firebase from 'firebase';
import { render } from '@testing-library/react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedNoteIndex: null,
      selectedNote: null,
      notes: null}
    
  };


render() {
  return(<div style={{fontWeight:"bold"}}>Hello World!!</div>)
}

componentDidMount = () =>{

  firebase
    .firestore()
    .collection('notes')
    .onSnapshot(serverUpdate =>{
      const notes = serverUpdate.docs.map(_doc =>{
        const data = _doc.data();
        data['id'] = _doc.id;
        return data;
      });
      console.log(notes);
      this.setState({notes: notes});
    });
  }
}

export default App;
