import { Component } from 'react/cjs/react.production.min';
import Container from './Container/Container';
import ContactsForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import './App.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = newContact => {
    const isInContacts = this.state.contacts.find(
      contact => contact.name === newContact.name
    );

    if (isInContacts) {
      alert(`${newContact.name} is already on contacts`);
      return;
    }

    this.setState(({ contacts }) => ({ contacts: [newContact, ...contacts] }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilter = event => this.setState({ filter: event.currentTarget.value });

  findByName = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    return (
      <Container title="Phonebook">
        <ContactsForm onSubmit={this.addContact} />
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList
          contacts={this.findByName()}
          deleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;
