import React from 'react';

import './App.css';
// import { v4 as uuid } from 'uuid';
import { Form } from './components/Form/Form';
// import { Filter } from './components/Filter/Filter';
// import Feedback from './components/Feedback/Feedback';
import Phonebook from './components/Phonebook/Phonebook';
import Filter from './components/Filter/Filter';
class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    // name: '',
    // number: '',
  };

  addNewContact = newContact => {
    this.state.contacts.find(contact => contact.name === newContact.name)
      ? alert(`${newContact.name} already exists`)
      : this.setState(prevState => {
          return {
            contacts: [...prevState.contacts, newContact],
          };
        });
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter),
    );
  };
  // filterContacts = filter => {

  //   // console.log('object');
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase())),
  //   }));

  //   //
  //   // this.setState(prevState => {
  //   //   return {
  //   //     contacts: [...prevState.contacts, newContact],
  //   //   };
  //   // });
  // };

  //  addNewProduct = newContact => {
  //     this.setState(prevState => {
  //       return {
  //         contacts: [...prevState.contacts, newContact],
  //       };
  //     });
  //   };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  findContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const visibleContacts = this.getVisibleContacts();
    // console.log(this.state.name, this.state.number);

    return (
      <div className="App">
        <Form addNewContact={this.addNewContact} />
        <Filter value={filter} onChange={this.changeFilter} />
        {/* <Filter filterContacts={this.filterContacts}/> */}
        <Phonebook
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
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
