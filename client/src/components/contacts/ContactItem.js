import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Icon,
  Card,
  Label,
  List,
  Grid,
  Popup,
} from 'semantic-ui-react';
import ContactContext from '../../context/contact/contactContext';

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;

  const { id, name, email, phone, url, type } = contact;

  const handleDelete = () => {
    deleteContact(id);
    clearCurrent();
  };

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
          <Card.Header>
            {name} &nbsp;{' '}
            <Popup
              hoverable
              position="bottom center"
              trigger={<Icon name="edit" color="grey" />}
            >
              <Button
                color="yellow"
                content="Edit"
                icon="pencil alternate"
                onClick={() => setCurrent(contact)}
              />
              <Button
                color="red"
                content="Delete"
                icon="times"
                onClick={handleDelete}
              />
            </Popup>
          </Card.Header>
          <Card.Meta>Added: </Card.Meta>
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
      </Card>
    </Grid.Column>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
