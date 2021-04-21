import React from 'react';
// import { connect } from 'react-redux';
// import contactsOperations from '../../redux/contacts/contacts-operations';
// import getSelectors from '../../redux/contacts/contacts-selectors';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li className={styles.contactItem} key={id}>
          {name}: {number}
          <button
            className={styles.buttonDel}
            onClick={() => onDeleteContact(id)}
          >
            Deleted
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

// const getVisibleContactName = (allContacts, filter) => {
//   const normalizedFilter = filter.toLowerCase();

//   return allContacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter),
//   );
// };

export default ContactList;
