import React from 'react';

import img13 from '../../images/13.png';

import {Container, Details, Title, Description, Image} from './styles';

export default function Banner() {
  return (
    <Container>
      <Details>
        <Title>Cobre um amigo</Title>

        <Description>
          Mantenha suas parcerias em dias, use o PicPay para fazer suas
          cobranças.
        </Description>
      </Details>
      <Image source={img13} />
    </Container>
  );
}
