import React from 'react';

import img1 from '../../images/01.png';
import img2 from '../../images/02.png';
import img3 from '../../images/03.png';
import img4 from '../../images/04.png';
import img5 from '../../images/05.png';
import img6 from '../../images/06.png';
import img7 from '../../images/07.png';

import {Container, Option, Img, Label} from './styles';

export default function Suggestions() {
  const items = [
    {
      key: 'img1',
      img: img1,
      label: 'Recarga',
    },
    {
      key: 'img2',
      img: img2,
      label: 'Uber',
    },
    {
      key: 'img3',
      img: img3,
      label: 'Ônibus',
    },
    {
      key: 'img4',
      img: img4,
      label: 'Sky',
    },
    {
      key: 'img5',
      img: img5,
      label: 'Doações',
    },
    {
      key: 'img6',
      img: img6,
      label: 'QR Code',
    },
    {
      key: 'img7',
      img: img7,
      label: 'Ajuda',
    },
  ];

  return (
    <Container>
      {items.map((item) => (
        <Option key={item.key}>
          <Img source={item.img} />
          <Label>{item.label}</Label>
        </Option>
      ))}
    </Container>
  );
}
