import React from 'react';

import {
  Wrapper,
  Header,
  NotificationLabel,
  SettingsButton,
  SettingsLabel,
  NotificationsList,
  MessageContainer,
  Message,
} from './styles';

export default function Notification() {
  const items = [
    {
      key: '1',
      message:
        'Games + Cashback = PicPay ♥ Comprou cŕeditos de jogos hoje na PicPay, garantiu 20% de volta. Aproveite!',
    },
    {
      key: '2',
      message:
        'Enviou 💰 ganhou de volta! Page qualquer amigo com Picpay hoje e aproveite 10% de cashback. E aí partiu? 😆',
    },
    {
      key: '3',
      message:
        'Boleto hone não! Elimine um boleto pagando com PicPay e ganhe 10% de volta. Toque e aproveite!',
    },
    {
      key: '4',
      message:
        'Games com cashback? QUERO! 🕹 É só comprar créditos de jogos ainda hoje na PicPay Story e garantir 20% de volta',
    },
    {
      key: '5',
      message:
        'Boleto bom é boleto pago 😂 E no próximo a gente te ajuda com 10% de volta. É só pagar com PicPay ainda hoje',
    },
    {
      key: '6',
      message:
        'Quer fica feliz junto com alguém? ✌ É só pagar um amigo hoje PicPay e ganhar 10% de volta. Bom pros dois né?',
    },
    {
      key: '7',
      message:
        'A transferência de R$ 1.000,00 para sua conta bancária foi concluída',
    },
    {
      key: '8',
      message:
        'Boleto hone não! Elimine um boleto pagando com PicPay e ganhe 10% de volta. Toque e aproveite!',
    },
    {
      key: '9',
      message:
        'Games com cashback? QUERO! 🕹 É só comprar créditos de jogos ainda hoje na PicPay Story e garantir 20% de volta',
    },
    {
      key: '10',
      message:
        'Boleto bom é boleto pago 😂 E no próximo a gente te ajuda com 10% de volta. É só pagar com PicPay ainda hoje',
    },
    {
      key: '11',
      message:
        'Enviou 💰 ganhou de volta! Page qualquer amigo com Picpay hoje e aproveite 10% de cashback. E aí partiu? 😆',
    },
    {
      key: '12',
      message:
        'Games + Cashback = PicPay ♥ Comprou cŕeditos de jogos hoje na PicPay, garantiu 20% de volta. Aproveite!',
    },
    {
      key: '13',
      message:
        'A transferência de R$ 3.000,00 para sua conta bancária foi concluída',
    },
  ];

  return (
    <Wrapper>
      <Header>
        <NotificationLabel>Notificação</NotificationLabel>
        <SettingsButton>
          <SettingsLabel>Configurar</SettingsLabel>
        </SettingsButton>
      </Header>

      <NotificationsList
        data={items}
        renderItem={({item}) => (
          <MessageContainer>
            <Message>{item.message}</Message>
          </MessageContainer>
        )}
        keyExtractor={(item) => item.key}
      />
    </Wrapper>
  );
}
