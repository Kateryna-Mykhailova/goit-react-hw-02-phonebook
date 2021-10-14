import React from 'react';
import './App.css';
import { v4 as uuid } from 'uuid';

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
    filter: '',
    name: '',
    number: '',
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handleChange = e => {
    // console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  idName = uuid();
  idNumber = uuid();

  render() {
    console.log(this.state.name, this.state.number);
    const { contacts } = this.state;

    return (
      <div className="App">
        <Phonebook contacts={contacts} onDeleteContact={this.deleteContact} />

        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.idName}>Name</label>
          <input
            id={this.idName}
            name="name"
            type="text"
            onChange={this.handleChange}
          />

          <label htmlFor={this.idNumber}>Number</label>
          <input
            id={this.idNumber}
            name="number"
            type="text"
            onChange={this.handleChange}
          />

          <button type="submit">Add</button>
        </form>
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
