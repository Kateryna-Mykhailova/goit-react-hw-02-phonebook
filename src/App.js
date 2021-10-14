import React from 'react';
import './App.css';
// import { v4 as uuid } from 'uuid';
import { Form } from './components/Form/Form';
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
    // name: '',
    // number: '',
  };

  addNewProduct = newContact => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  // handleChange = e => {
  //   // console.log(e.target.name, e.target.value);
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   const newContact = {
  //     name: this.state.name,
  //     number: this.state.number,
  //     id: uuid()
  //   };
  //   // this.setState({ contact: newContact });
  //   this.setState((prevState) => {
  //     return {
  //       contacts: [...prevState.contacts, newContact ]
  //     }
  //   })
  //   this.resetForm();
  // };

  // resetForm = () => {
  //   this.setState({name: '', number: ''})
  // }

  // idName = uuid();
  // idNumber = uuid();

  render() {
    // console.log(this.state.name, this.state.number);
    const { contacts } = this.state;

    return (
      <div className="App">
        <Form addNewProduct={this.addNewProduct} />
        <Phonebook contacts={contacts} onDeleteContact={this.deleteContact} />

        {/* <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.idName}>Name</label>
          <input
            id={this.idName}
            name="name"
            value={this.state.name}
            type="text"
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />

          <label htmlFor={this.idNumber}>Number</label>
          <input
            id={this.idNumber}
            name="number"
            value={this.state.number}
            type="text"
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />

          <button type="submit">Add</button>
        </form> */}
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
