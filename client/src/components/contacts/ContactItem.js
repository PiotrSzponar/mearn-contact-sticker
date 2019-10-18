import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Label, List, Grid } from 'semantic-ui-react';

const ContactItem = ({ contact }) => {
  const { id, name, email, phone, url, type } = contact;

  return (
    <Grid.Column mobile={16} computer={8}>
      <Card fluid>
        <Card.Content>
          <Label
            color={type === 'personal' ? 'green' : 'blue'}
            floating
            style={{ left: 'auto', right: '-10px' }}
          >
            {type}
          </Label>
          <Card.Header>{name}</Card.Header>
          <Card.Description>
            <List>
              {email && (
                <List.Item
                  icon="mail"
                  content={<a href={`mailto:${email}`}>{email}</a>}
                />
              )}
              {phone && (
                <List.Item
                  icon="phone"
                  content={<a href={`tel:${phone}`}>{phone}</a>}
                />
              )}
              {url && (
                <List.Item icon="linkify" content={<a href={url}>{url}</a>} />
              )}
            </List>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button.Group widths="2">
            <Button compact basic color="green" content="Edit" icon="edit" />
            <Button compact basic color="red" content="Delete" icon="times" />
          </Button.Group>
        </Card.Content>
      </Card>
    </Grid.Column>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
