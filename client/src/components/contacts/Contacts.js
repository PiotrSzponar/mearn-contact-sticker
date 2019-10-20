import React, { useContext } from 'react';
import ContactItem from './ContactItem';
import { Grid, Header, Icon } from 'semantic-ui-react';
import ContactContext from '../../context/contact/contactContext';

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered } = contactContext;

  if (contacts.length === 0) {
    return (
      <Header as="h3" icon color="grey" textAlign="center">
        <Icon name="archive" circular />
        No Data
        <Header.Subheader>Please add a contact</Header.Subheader>
      </Header>
    );
  }

  if (filtered && filtered.length === 0) {
    return (
      <Header as="h3" icon color="grey" textAlign="center">
        <Icon name="search" circular />
        Not Found
        <Header.Subheader>Please type something else</Header.Subheader>
      </Header>
    );
  }

  return (
    <Grid>
      {filtered !== null
        ? filtered.map(contact => (
            <ContactItem contact={contact} key={contact.id} />
          ))
        : contacts.map(contact => (
            <ContactItem contact={contact} key={contact.id} />
          ))}
    </Grid>
  );
};

export default Contacts;
