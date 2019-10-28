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

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

  const handleChange = (e, { name, value }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('login');
  };

  return (
    <Grid centered>
      <Grid.Column mobile={16} tablet={9} computer={7}>
        <Header as="h3" attached="top">
          Log In
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
            <Button
              type="submit"
              content="Log In"
              icon="sign-in"
              primary
              fluid
            />
          </Form>
        </Segment>
        <Message info attached="bottom">
          <Icon name="question circle" />
          If you don't have an account, please{' '}
          <Link to="/register">
            <Button content="Sign Up" size="small" basic compact />
          </Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default Login;
