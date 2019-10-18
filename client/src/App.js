import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';

import ContactState from './context/contact/ContactState';

const App = () => {
  return (
    <ContactState>
      <Router>
        <Navbar />
        <Container
          fluid
          style={{ padding: '20px 50px', maxWidth: 1200, margin: '0 auto' }}
        >
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Container>
      </Router>
    </ContactState>
  );
};

export default App;
