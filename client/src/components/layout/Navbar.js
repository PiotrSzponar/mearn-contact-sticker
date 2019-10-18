import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Menu, Header, Icon, Button } from 'semantic-ui-react';

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
          <Link to="sign">
            <Button primary>Log-in</Button>
          </Link>
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
