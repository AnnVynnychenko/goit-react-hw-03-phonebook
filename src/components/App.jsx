import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Phonebook from './Phonebook';
import Contacts from './Contacts';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = contactData => {
    const { name } = contactData;
    const ifNameTaken = this.state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (ifNameTaken) {
      return alert(`${name} is already in contacts`);
    }
    const contactDataWithId = { ...contactData, id: nanoid() };
    this.setState(({ contacts }) => ({
      contacts: [...contacts, contactDataWithId],
    }));
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };

  filterContacts = e => {
    const { value } = e.currentTarget;
    this.setState({ filter: value });
  };

  visibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter } = this.state;
    return (
      <Phonebook titleBegin="Phone" titleEnd="book">
        <ContactForm onSubmit={this.formSubmitHandler} />
        <Contacts title="Contacts">
          <Filter filterValue={filter} onFilterContacts={this.filterContacts} />
          <ContactList
            contacts={this.visibleContacts()}
            onDeleteContact={this.deleteContact}
          />
        </Contacts>
      </Phonebook>
    );
  }
}

export default App;
