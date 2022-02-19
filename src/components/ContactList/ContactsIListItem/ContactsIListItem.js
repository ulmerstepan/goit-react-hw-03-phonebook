import {
  ContactItemBox,
  ContactInfoBox,
  NameContact,
  TelContact,
  DeleteBtn,
} from './ContactsIListItem.styled';

export default function ContactListItem({ contact, deleteContact }) {
  return (
    <ContactItemBox>
      <ContactInfoBox>
        <NameContact>{contact.name}</NameContact>
        <TelContact href={`tel:${contact.number}`}>{contact.number}</TelContact>
      </ContactInfoBox>

      <DeleteBtn type="button" onClick={() => deleteContact(contact.id)}>
        Delete
      </DeleteBtn>
    </ContactItemBox>
  );
}
