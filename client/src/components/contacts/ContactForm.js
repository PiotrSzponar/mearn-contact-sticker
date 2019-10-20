import React, { useState, useContext, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const { addContact, updateContact, current, clearCurrent } = contactContext;

  const [contact, setContact] = useState({
    id: '',
    name: '',
    email: '',
    phone: '',
    url: '',
    type: 'personal',
  });

  const { name, email, phone, url } = contact;

  const clearForm = () => {
    setContact({
      id: '',
      name: '',
      email: '',
      phone: '',
      url: '',
      type: 'personal',
    });
  };

  useEffect(() => {
    if (current) {
      setContact({
        id: current.id,
        name: current.name,
        email: current.email ? current.email : '',
        phone: current.phone ? current.phone : '',
        url: current.url ? current.url : '',
        type: current.type,
      });
    } else {
      clearForm();
    }
  }, [contactContext, current]);

  const handleChange = (e, { name, value }) => {
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
    clearForm();
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
      <Button.Group widths="2">
        <Button
          type="submit"
          content={current ? 'Update Contact' : 'Add Contact'}
          icon={current ? 'edit' : 'plus'}
          color={current ? 'orange' : 'blue'}
        />
        <Button.Or />
        <Button content="Clear" icon="erase" color="grey" onClick={clearAll} />
      </Button.Group>
    </Form>
  );
};

export default ContactForm;
