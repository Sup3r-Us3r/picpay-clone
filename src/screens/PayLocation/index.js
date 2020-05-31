import React from 'react';

import {
  Wrapper,
  Container,
  Logo,
  Header,
  Footer,
  AuthorizeButton,
  AuthorizeLabel,
} from './styles';

export default function PayLocation() {
  return (
    <Wrapper>
      <Container>
        <Logo
          source={{
            uri:
              'https://cdn3.iconfinder.com/data/icons/shopping-and-retail-15/512/Market-512.png',
          }}
        />
        <Header>Descubra estabelecimentos perto de você</Header>
        <Footer>
          Temos estabelecimentos próximos de você que aceitam PicPay, para saber
          quais é só autorizar o acesso à sua localização
        </Footer>
        <AuthorizeButton>
          <AuthorizeLabel>Autorizar agora</AuthorizeLabel>
        </AuthorizeButton>
      </Container>
    </Wrapper>
  );
}
