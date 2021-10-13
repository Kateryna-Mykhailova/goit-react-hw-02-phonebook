import React from 'react';
import './App.css';

import Feedback from './components/Feedback/Feedback';
import Phonebook from './components/Phonebook/Phonebook';
function App() {
  return (
    <div className="App">
      <Feedback />
      <Phonebook />
    </div>
  );
}

export default App;
