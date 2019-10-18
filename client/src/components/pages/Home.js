import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';

const Home = () => {
  return (
    <Grid centered>
      <Grid.Column mobile={16} tablet={8} computer={5}>
        <Header as="h3" attached="top">
          Add/Edit Contact
        </Header>
        <Segment attached>
          <ContactForm />
        </Segment>
      </Grid.Column>
      <Grid.Column mobile={16} tablet={8} computer={9}>
        <Contacts />
      </Grid.Column>
    </Grid>
  );
};

export default Home;
