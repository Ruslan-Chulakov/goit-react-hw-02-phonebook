import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class Contacts extends Component {
  render() {
    const { contacts } = this.props;
    console.log(contacts);

    return (
      <div>
        <h2>Contacts</h2>
        <ul>
          {contacts.map(contact => (
            <li key={nanoid()}>
              {contact} 
              <button type="button">Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Contacts;
