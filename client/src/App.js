import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Alerts from './components/layout/Alerts';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
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
                <Alerts />
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                </Switch>
              </div>
            </Container>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
};

export default App;
