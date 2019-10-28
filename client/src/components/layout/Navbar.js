import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Menu, Header, Icon, Button, Popup } from 'semantic-ui-react';

const Navbar = ({ title, subtitle, icon }) => {
  return (
    <Menu inverted borderless style={{ borderRadius: 0 }}>
      <Menu.Item>
        <Link to="/">
          <Header inverted as="h3">
            <Icon name={icon} />
            <Header.Content>
              {title}
              <Header.Subheader>{subtitle}</Header.Subheader>
            </Header.Content>
          </Header>
        </Link>
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>
          <Popup
            trigger={
              <Link to="/register">
                <Button color="blue" primary icon="user plus" />
              </Link>
            }
            content="Sign Up"
            position="bottom right"
          />
          <Popup
            trigger={
              <Link to="/login">
                <Button basic inverted icon="sign-in" />
              </Link>
            }
            content="Log In"
            position="bottom right"
          />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

Navbar.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: 'Contact Sticker',
  subtitle: 'Manage your contacts',
  icon: 'address card',
};

export default Navbar;
