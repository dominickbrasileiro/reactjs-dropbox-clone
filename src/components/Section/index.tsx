import React from 'react';

import {
  Container,
  Content,
  HeaderWrapper,
  Header,
  DropboxLogo,
  ButtonContainer,
} from './styles';

interface SectionProps {
  variant: 'blue' | 'beige' | 'white' | 'black';
  title: string;
  description: string;
}

const Section: React.FC<SectionProps> = ({ variant, title, description }) => {
  function handleToggle() {
    if (window.toggleActiveMenu) window.toggleActiveMenu();
  }

  return (
    <Container className={variant}>
      <HeaderWrapper>
        <Header>
          <h1>
            <DropboxLogo />
            <span>Dropbox</span>
          </h1>

          <ButtonContainer>
            <button type="button" onClick={handleToggle}>Sign up</button>
          </ButtonContainer>
        </Header>
      </HeaderWrapper>

      <Content>
        <h2>{title}</h2>

        <p>{description}</p>
      </Content>
    </Container>
  );
};

export default Section;
