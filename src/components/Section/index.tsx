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

const Section: React.FC<SectionProps> = ({ variant, title, description }) => (
  <Container className={variant}>
    <HeaderWrapper>
      <Header>
        <h1>
          <DropboxLogo />
          <span>Dropbox</span>
        </h1>

        <ButtonContainer>
          <button type="button">Sign in</button>
          <button type="button">Sign up</button>
        </ButtonContainer>
      </Header>
    </HeaderWrapper>

    <Content>
      <h2>{title}</h2>

      <p>{description}</p>
    </Content>
  </Container>
);

export default Section;
