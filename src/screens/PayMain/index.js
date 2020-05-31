import React, {useState} from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {
  Wrapper,
  Container,
  Header,
  Contacts,
  ContactContainer,
  ContactData,
  ContactAvatar,
  ContactUserData,
  ContactNick,
  ContactName,
  ShowContact,
  ShowModal,
  ModalAvatar,
  ModalNick,
  ModalName,
  ModalActions,
  Option,
  OptionLabel,
} from './styles';

export default function PayMain() {
  const [toggleModal, setToggleModal] = useState(false);
  const [avatar, setAvatar] = useState('');
  const [nick, setNick] = useState('');
  const [username, setUsername] = useState('');

  const contacts = [
    {
      key: '1',
      avatar: {uri: 'https://api.adorable.io/avatars/70/abott@adorable.io.png'},
      nick: '@Sup3r-Us3r',
      username: 'Sup3r Us3r',
    },
    {
      key: '2',
      avatar: {uri: 'https://api.adorable.io/avatars/70/abott@adorable.io.png'},
      nick: '@Sup3r-Us3r',
      username: 'Sup3r Us3r',
    },
    {
      key: '3',
      avatar: {uri: 'https://api.adorable.io/avatars/70/abott@adorable.io.png'},
      nick: '@Sup3r-Us3r',
      username: 'Sup3r Us3r',
    },
    {
      key: '4',
      avatar: {uri: 'https://api.adorable.io/avatars/70/abott@adorable.io.png'},
      nick: '@Sup3r-Us3r',
      username: 'Sup3r Us3r',
    },
    {
      key: '5',
      avatar: {uri: 'https://api.adorable.io/avatars/70/abott@adorable.io.png'},
      nick: '@Sup3r-Us3r',
      username: 'Sup3r Us3r',
    },
    {
      key: '6',
      avatar: {uri: 'https://api.adorable.io/avatars/70/abott@adorable.io.png'},
      nick: '@Sup3r-Us3r',
      username: 'Sup3r Us3r',
    },
    {
      key: '7',
      avatar: {uri: 'https://api.adorable.io/avatars/70/abott@adorable.io.png'},
      nick: '@Sup3r-Us3r',
      username: 'Sup3r Us3r',
    },
    {
      key: '8',
      avatar: {uri: 'https://api.adorable.io/avatars/70/abott@adorable.io.png'},
      nick: '@Sup3r-Us3r',
      username: 'Sup3r Us3r',
    },
    {
      key: '9',
      avatar: {uri: 'https://api.adorable.io/avatars/70/abott@adorable.io.png'},
      nick: '@Sup3r-Us3r',
      username: 'Sup3r Us3r',
    },
    {
      key: '10',
      avatar: {uri: 'https://api.adorable.io/avatars/70/abott@adorable.io.png'},
      nick: '@Sup3r-Us3r',
      username: 'Sup3r Us3r',
    },
  ];

  function handleShowContact(contactData) {
    setToggleModal(!toggleModal);
    setAvatar(contactData.avatar);
    setNick(contactData.nick);
    setUsername(contactData.username);
  }

  function handleCloseModal() {
    setToggleModal(false);
  }

  return (
    <Wrapper>
      <Container>
        <Header>Contatos</Header>
        <Contacts
          data={contacts}
          keyExtractor={(item) => item.key}
          renderItem={({item}) => (
            <ContactContainer>
              <ContactData>
                <ContactAvatar source={item.avatar} />
                <ContactUserData>
                  <ContactNick>{item.nick}</ContactNick>
                  <ContactName>{item.username}</ContactName>
                </ContactUserData>
              </ContactData>
              <ShowContact onPress={() => handleShowContact(item)}>
                <SimpleLineIcons
                  name="options-vertical"
                  color="#fff"
                  size={20}
                />
              </ShowContact>
            </ContactContainer>
          )}
        />
        {toggleModal && (
          <ShowModal>
            <ModalAvatar source={avatar} />
            <ModalNick>{nick}</ModalNick>
            <ModalName>{username}</ModalName>
            <ModalActions>
              <Option>
                <MaterialIcons name="payment" color="#fff" size={20} />
                <OptionLabel>Pagar</OptionLabel>
              </Option>
              <Option onPress={handleCloseModal}>
                <AntDesign name="close" color="#fff" size={20} />
                <OptionLabel>Cancelar</OptionLabel>
              </Option>
            </ModalActions>
          </ShowModal>
        )}
      </Container>
    </Wrapper>
  );
}
