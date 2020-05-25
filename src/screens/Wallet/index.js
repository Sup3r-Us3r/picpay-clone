import React, {useState} from 'react';
import {Switch} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

import creditCard from '../../images/credit-card.png';

import {
  Wrapper,
  Header,
  HeaderContainer,
  Title,
  BalanceContainer,
  Value,
  Bold,
  EyeButton,
  Info,
  Actions,
  Action,
  ActionLabel,
  UseBalance,
  UseBalanceTitle,
  PaymentMethods,
  PaymentMethodsTitle,
  Card,
  CardBody,
  CardDetails,
  CardTitle,
  CardInfo,
  Img,
  AddButton,
  AddLabel,
  UseTicketButton,
  UseTicketLabel,
} from './styles';

export default function Wallet() {
  const [toggleEyes, setToggleEyes] = useState(true);
  const [toggleSwitch, setToggleSwitch] = useState(true);

  function handleToggleEye() {
    setToggleEyes(!toggleEyes);
  }

  function handleToggleSwitch() {
    setToggleSwitch(!toggleSwitch);
  }

  return (
    <Wrapper>
      <Header
        colors={toggleSwitch ? ['#52E78C', '#1aB563'] : ['#d3d3d3', '#868686']}
        start={{x: 1, y: 0.2}}>
        <HeaderContainer>
          <Title>Saldo PicPay</Title>

          <BalanceContainer>
            <Value>
              R$ <Bold>{toggleEyes ? '0,00' : '---'}</Bold>
            </Value>

            <EyeButton>
              <Feather
                name={toggleEyes ? 'eye' : 'eye-off'}
                color="#fff"
                size={25}
                onPress={handleToggleEye}
              />
            </EyeButton>
          </BalanceContainer>

          <Info>Seu saldo está rendendo 100% do CDI</Info>

          <Actions>
            <Action>
              <MaterialCommunityIcons name="cash" color="#fff" size={28} />
              <ActionLabel>Adicionar</ActionLabel>
            </Action>

            <Action>
              <FontAwesome name="bank" color="#fff" size={20} />
              <ActionLabel>Adicionar</ActionLabel>
            </Action>
          </Actions>
        </HeaderContainer>
      </Header>

      <UseBalance>
        <UseBalanceTitle>Usar saldo ao pagar</UseBalanceTitle>

        <Switch
          trackColor={{true: '#52E78C', false: '#333'}}
          thumbColor="#fff"
          onValueChange={handleToggleSwitch}
          value={toggleSwitch}
        />
      </UseBalance>

      <PaymentMethods>
        <PaymentMethodsTitle>Forma de pagamento</PaymentMethodsTitle>
      </PaymentMethods>

      <Card>
        <CardBody>
          <CardDetails>
            <CardTitle>Cadastre seu cartão de crédito</CardTitle>
            <CardInfo>
              Cadastre seu cartão de crédito, para poder fazer pagamento mesmo
              quando não tiver saldo no seu PicPay.
            </CardInfo>
          </CardDetails>

          <Img source={creditCard} resizeMode="contain" />
        </CardBody>

        <AddButton>
          <AntDesign name="pluscircleo" color="#0db060" size={30} />
          <AddLabel>Adicionar cartão de crédito</AddLabel>
        </AddButton>
      </Card>

      <UseTicketButton>
        <MaterialCommunityIcons
          name="ticket-outline"
          color="#0db060"
          size={25}
        />
        <UseTicketLabel>Usar código promocional</UseTicketLabel>
      </UseTicketButton>
    </Wrapper>
  );
}
