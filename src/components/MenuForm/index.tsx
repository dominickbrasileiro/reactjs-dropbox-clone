import React from 'react';

import {
  Container,
  Navigation,
  DropboxLogo,
  Form,
} from './styles';

const MenuForm: React.FC = () => {
  function handleToggle() {
    if (window.toggleActiveMenu) window.toggleActiveMenu();
  }

  return (
    <Container>
      <Navigation>
        <h1>
          <DropboxLogo />
          <span>Dropbox</span>
        </h1>

        <button
          type="button"
          className="action--close"
          onClick={handleToggle}
        >
          ✕

        </button>
      </Navigation>

      <Form>
        <span className="title">
          Sign up
        </span>
        <span className="subtitle">Fill out the form below</span>

        <input type="text" placeholder="First name" />
        <input type="text" placeholder="Last name" />
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Password" />

        <button type="submit">Continue</button>

        <span className="terms">This page is subject to the Google Privacy Policy and Terms of service.</span>
      </Form>
    </Container>
  );
};

export default MenuForm;
