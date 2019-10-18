import React, { useContext } from 'react';
import ContactItem from './ContactItem';
import { Grid } from 'semantic-ui-react';
import ContactContext from '../../context/contact/contactContext';

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts } = contactContext;

  return (
    <Grid>
      {contacts.map(contact => (
        <ContactItem contact={contact} key={contact.id} />
      ))}
    </Grid>
  );
};

export default Contacts;
