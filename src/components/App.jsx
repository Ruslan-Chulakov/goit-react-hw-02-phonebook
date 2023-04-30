import { Component } from 'react';
import { Notify } from 'notiflix';
import clsx from 'clsx'
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import css from './App.module.css'

export class App extends Component {
  state = {
    contacts: [
      { id: 'klajsdf', name: 'Harry Potter', number: '111-11-11' },
      { id: 'faslkj', name: 'Hermiona Grainger', number: '222-22-22' },
      { id: 'asdf', name: 'Ron Whisley', number: '333-33-33' },
      { id: 'wiow', name: 'Dart Vaider', number: '777-77-77' },
    ],
    filter: '',
  };

  handleAddContact = contact => {
    if (this.state.contacts.find(person => person.name === contact.name)) {
      Notify.failure('This name is already exist');
      return;
    }
    if (this.state.contacts.find(person => person.number === contact.number)) {
      Notify.failure('This number is already exist');
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  handleDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleChange = evt => this.setState({ filter: evt.target.value });

  handleFilterContacts = () =>
    this.state.contacts.filter(contact =>
      contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase().trim())
    );

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.handleFilterContacts();

    return (
      <div className={clsx(css.container)}>
        <span className={clsx(css.titleSpan)}>
          <h1 className={clsx(css.title)}>Phonebook</h1>
        </span>
        <ContactForm handleAddContact={this.handleAddContact} />

        {contacts.length !== 0 && <span className={clsx(css.titleSpan)}><h2 className={clsx(css.title)}>Contacts</h2></span>}

        {contacts.length > 3 && (
          <Filter value={filter} handleChange={this.handleChange} />
        )}

        {contacts.length !== 0 && (
          <ContactList
            contacts={filteredContacts}
            handleDelete={this.handleDelete}
          />
        )}
      </div>
    );
  }
}


// styled components
