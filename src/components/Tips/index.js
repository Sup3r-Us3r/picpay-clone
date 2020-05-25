import React from 'react';

import img8 from '../../images/08.png';
import img9 from '../../images/09.png';
import img10 from '../../images/10.png';
import img11 from '../../images/11.png';
import img12 from '../../images/12.png';

import {Container, Option, Title, Img} from './styles';

export default function Tips() {
  const items = [
    {
      key: 'img8',
      img: img8,
      title: 'Tenha sua carteira digital na PicPay',
      bgColor: '#172c4a',
    },
    {
      key: 'img9',
      img: img9,
      title: 'Realize compras com o valor que tem depositado no PicPay',
      bgColor: '#6a0159',
    },
    {
      key: 'img10',
      img: img10,
      title: 'Na PicPay criamos laços com nossos clientes',
      bgColor: '#4139c8',
    },
    {
      key: 'img11',
      img: img11,
      title: 'Acesso de forma simples e rápido sem burocracias',
      bgColor: '#ba2f76',
    },
    {
      key: 'img12',
      img: img12,
      title: 'Pague suas contas sem sair de casa',
      bgColor: '#7159c1',
    },
  ];

  return (
    <Container>
      {items.map((item) => (
        <Option key={item.key} bgColor={item.bgColor}>
          <Title>{item.title}</Title>

          <Img source={item.img} />
        </Option>
      ))}
    </Container>
  );
}
