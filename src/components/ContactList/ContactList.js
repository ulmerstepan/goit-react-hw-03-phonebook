import PropTypes from 'prop-types';

import ContactListItem from './ContactsIListItem/ContactsIListItem';
import { ContactsListBox } from './ContactList.styled';

export default function ContactList({ contacts, deleteContact }) {
  return (
    <ContactsListBox>
      {contacts.map(contact => (
        <ContactListItem
          contact={contact}
          deleteContact={deleteContact}
          key={contact.id}
        />
      ))}
    </ContactsListBox>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
