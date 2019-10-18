import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Menu, Header, Icon, Segment, Button } from 'semantic-ui-react';

const Navbar = ({ title, icon }) => {
  return (
    <Segment inverted style={{ borderRadius: 0 }}>
      <Menu stackable inverted borderless secondary>
        <Menu.Item>
          <Link to="/">
            <Header inverted as="h3">
              <Icon name={icon} />
              <Header.Content>
                {title}
                <Header.Subheader>Manage your contacts</Header.Subheader>
              </Header.Content>
            </Header>
          </Link>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Link to="about">About</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="sign">
              <Button primary>Log-in</Button>
            </Link>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </Segment>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: 'Contact Sticker',
  icon: 'address card',
};

export default Navbar;
