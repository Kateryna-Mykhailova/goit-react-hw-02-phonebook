import React from 'react';
import { Component } from 'react';
import { v4 as uuid } from 'uuid';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  idName = uuid();
  idNumber = uuid();
  handleChange = e => {
    // console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newContact = {
      name: this.state.name,
      number: this.state.number,
      id: uuid(),
    };
    // this.setState({ contact: newContact });

    this.props.addNewProduct(newContact);
    // this.setState((prevState) => {
    //   return {
    //     contacts: [...prevState.contacts, newContact ]
    //   }
    // })
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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
      </form>
    );
  }
}

// export default Form
