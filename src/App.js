import React from 'react';
import './App.css';

// import Feedback from './components/Feedback/Feedback';
import Phonebook from './components/Phonebook/Phonebook';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    // name: ''
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts } = this.state;

    return (
      <div className="App">
        <Phonebook contacts={contacts} onDeleteContact={this.deleteContact} />
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       {/* <Feedback /> */}
//       <Phonebook />
//     </div>
//   );
// }

export default App;
