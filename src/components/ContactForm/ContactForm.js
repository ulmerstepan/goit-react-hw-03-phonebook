import { Component } from 'react/cjs/react.production.min';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import {
  FormContact,
  LabelContact,
  InputContact,
  AddBtn,
} from './ContactForm.styled';

export default class ContactsForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    id: '',
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };

    this.props.onSubmit(newContact);

    this.resetForm();
  };

  resetForm = () => this.setState({ id: '', name: '', number: '' });

  render() {
    return (
      <FormContact onSubmit={this.handleSubmit}>
        <LabelContact>
          Name
          <InputContact
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </LabelContact>

        <LabelContact>
          Number
          <InputContact
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </LabelContact>

        <AddBtn type="submit">Add contact</AddBtn>
      </FormContact>
    );
  }
}
