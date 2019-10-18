import React, { useState, useContext } from 'react';
import { Button, Form } from 'semantic-ui-react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    url: '',
    type: 'personal',
  });

  const { name, email, phone, url } = contact;

  const handleChange = (e, { name, value }) => {
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    contactContext.addContact(contact);
    setContact({
      name: '',
      email: '',
      phone: '',
      url: '',
      type: 'personal',
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Input
        fluid
        label="Name"
        name="name"
        value={name}
        placeholder="Enter name..."
        onChange={handleChange}
        required
      />
      <Form.Input
        fluid
        label="E-mail"
        type="email"
        name="email"
        value={email}
        placeholder="Enter e-mail address..."
        onChange={handleChange}
      />
      <Form.Input
        fluid
        label="Phone"
        type="number"
        name="phone"
        value={phone}
        placeholder="Enter phone number..."
        onChange={handleChange}
      />
      <Form.Input
        fluid
        label="Website"
        name="url"
        value={url}
        placeholder="Enter url of website..."
        onChange={handleChange}
      />
      <Form.Group inline>
        <label>Type</label>
        <Form.Radio
          label="Personal"
          value="personal"
          name="type"
          checked={contact.type === 'personal'}
          onChange={handleChange}
        />
        <Form.Radio
          label="Professional"
          value="professional"
          name="type"
          checked={contact.type === 'professional'}
          onChange={handleChange}
        />
      </Form.Group>
      <Button type="submit" content="Add Contact" icon="plus" primary fluid />
    </Form>
  );
};

export default ContactForm;
