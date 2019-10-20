import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';

import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <Router>
          <Navbar />
          <Container fluid>
            <div
              style={{
                padding: '20px 50px',
                maxWidth: '1200px',
                margin: '0 auto',
              }}
            >
              <Switch>
                <Route exact path="/" component={Home} />
              </Switch>
            </div>
          </Container>
        </Router>
      </ContactState>
    </AuthState>
  );
};

export default App;
