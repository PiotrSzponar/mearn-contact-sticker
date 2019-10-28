import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Grid,
  Header,
  Segment,
  Icon,
  Button,
  Form,
  Message,
} from 'semantic-ui-react';

const Register = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
    password2: '',
  });

  const { email, password, password2 } = user;

  const handleChange = (e, { name, value }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('register');
  };

  return (
    <Grid centered>
      <Grid.Column mobile={16} tablet={9} computer={7}>
        <Header as="h3" attached="top">
          Create new Account
        </Header>
        <Segment attached>
          <Form onSubmit={handleSubmit}>
            <Form.Input
              fluid
              label="E-mail"
              type="email"
              name="email"
              value={email}
              placeholder="Enter e-mail address..."
              onChange={handleChange}
              required
            />
            <Form.Group widths={2}>
              <Form.Input
                fluid
                label="Password"
                type="password"
                name="password"
                value={password}
                placeholder="Enter password..."
                onChange={handleChange}
                required
              />
              <Form.Input
                fluid
                label="Confirm password"
                type="password"
                name="password2"
                value={password2}
                placeholder="Confirm password..."
                onChange={handleChange}
                error={password !== password2}
                required
              />
            </Form.Group>
            <Button
              type="submit"
              content="Register"
              icon="send"
              primary
              fluid
            />
          </Form>
        </Segment>
        <Message info attached="bottom">
          <Icon name="sign-in" />
          If you have the account, please{' '}
          <Link to="/login">
            <Button content="Log In" size="small" basic compact />
          </Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default Register;
