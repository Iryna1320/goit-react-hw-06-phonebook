import React, { Component } from 'react';
import { connect } from 'react-redux';

import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

import { contactsOperations, contactsSelectors } from './redux/contacts';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <div className="App">
        <h1 className="App_title">Phonebook</h1>
        <ContactForm />

        <h2 className="App_title">Contacts</h2>
        {this.props.isLoadingContacts && <h1>Loading...</h1>}
        <Filter />

        <ContactList />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingContacts: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
