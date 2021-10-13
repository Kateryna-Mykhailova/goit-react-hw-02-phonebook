import React from 'react';
import './Phonebook.css';

const Phonebook = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        <p>{name}</p>
        <p>{number}</p>
        <button onClick={() => onDeleteContact(id)}>Удалить</button>
      </li>
    ))}
  </ul>
);
// class Phonebook extends React.Component {
//   state = {

//   };

//   render() {
//     return (
//       <div className="Feedback_container">
//     //
//       </div>
//     );
//   }
// }

export default Phonebook;
