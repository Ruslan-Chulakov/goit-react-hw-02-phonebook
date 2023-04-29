import { Component } from 'react';
import Contacts from './Contacts';
import Phonebook from './Phonebook';


export class App extends Component {
  state = {
    contacts: ["Harry Potter", 'Germiona Granger', 'Ron Whisley'],
    name: '',
  };

  render() {

    const {contacts} = this.state

    return (
      <div>
        <Phonebook />
        <Contacts contacts={contacts} />
      </div>
    );
  }
};
