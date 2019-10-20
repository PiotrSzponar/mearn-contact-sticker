import React, { useContext, useState } from 'react';
import { Form } from 'semantic-ui-react';
import ContactContext from '../../context/contact/contactContext';

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const [filter, setFilter] = useState('');

  const { filterContacts, clearFilter } = contactContext;

  const handleChange = e => {
    if (e.target.value !== '') {
      setFilter(e.target.value);
      filterContacts(e.target.value);
    } else {
      setFilter('');
      clearFilter();
    }
  };

  return (
    <Form style={{ paddingBottom: '2rem' }}>
      <Form.Input
        fluid
        name="filter"
        value={filter}
        placeholder="Filter Contacts..."
        onChange={handleChange}
        required
      />
    </Form>
  );
};

export default ContactFilter;
