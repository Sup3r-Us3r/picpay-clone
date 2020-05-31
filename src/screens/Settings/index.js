import React from 'react';

import avatar from '../../images/avatar.png';

import {
  Wrapper,
  BannerContainer,
  Help,
  UserData,
  Avatar,
  NickLabel,
  UsernameLabel,
  MyProfile,
  MyAccount,
  ContainerOptions,
  Option,
} from './styles';

export default function Settings() {
  return (
    <Wrapper>
      <BannerContainer start={{x: 1, y: 0.2}} colors={['#52E78C', '#1aB563']}>
        <Help>Ajuda</Help>
        <UserData>
          <Avatar source={avatar} />
          <NickLabel>@Sup3r-Us3r</NickLabel>
          <UsernameLabel>Sup3r Us3r</UsernameLabel>
          <MyProfile>Ver meu perfil</MyProfile>
        </UserData>
        <MyAccount>Minha conta</MyAccount>
      </BannerContainer>

      <ContainerOptions>
        <Option>Meu PipPay</Option>
        <Option>Meu número</Option>
        <Option>Meu e-mail</Option>
        <Option>Dados pessoais</Option>
        <Option>Conta bancária</Option>
        <Option>Taxas e limites</Option>
        <Option>Meus endereços</Option>
        <Option>Meus favoritos</Option>
        <Option>Validar identidade</Option>
        <Option>Meu PipPay</Option>
        <Option>Meu número</Option>
        <Option>Meu e-mail</Option>
        <Option>Dados pessoais</Option>
        <Option>Conta bancária</Option>
        <Option>Taxas e limites</Option>
        <Option>Meus endereços</Option>
        <Option>Meus favoritos</Option>
        <Option>Validar identidade</Option>
        <Option>Conta bancária</Option>
        <Option>Taxas e limites</Option>
        <Option>Meus endereços</Option>
        <Option>Meus favoritos</Option>
        <Option>Validar identidade</Option>
      </ContainerOptions>
    </Wrapper>
  );
}
