import styled from 'styled-components/native';
import {FlatList} from 'react-native';

export const Wrapper = styled.SafeAreaView`
  background: #000;
  flex: 1;
`;

export const Container = styled.View``;

export const Header = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  margin-top: 10px;
  padding: 0 16px;
`;

export const Contacts = styled(FlatList)`
  margin-top: 15px;
  margin-bottom: 40px;
`;

export const ContactContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px 16px 0 16px;
  padding: 16px 16px;
  background: #1e222b;
  border-radius: 8px;
`;

export const ContactData = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ContactAvatar = styled.Image.attrs(() => ({
  resizeMode: 'contain',
}))`
  height: 60px;
  width: 60px;
  border-radius: 30px;
  margin-right: 20px;
`;

export const ContactUserData = styled.View``;

export const ContactNick = styled.Text`
  color: #10c86e;
  font-size: 17px;
  font-weight: bold;
`;

export const ContactName = styled.Text`
  color: #fff;
  line-height: 25px;
  font-size: 14px;
`;

export const ShowContact = styled.TouchableOpacity``;

export const ShowModal = styled.View`
  align-items: center;
  z-index: 1000;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.93);
  height: 100%;
  width: 100%;
`;

export const ModalAvatar = styled.Image.attrs(() => ({
  resizeMode: 'contain',
}))`
  margin-top: 150px;
  margin-bottom: 10px;
  height: 150px;
  width: 150px;
  border-radius: 75px;
`;

export const ModalNick = styled.Text`
  color: #10c86e;
  font-size: 27px;
  font-weight: bold;
`;

export const ModalName = styled.Text`
  color: #fff;
  line-height: 30px;
  font-size: 20px;
`;

export const ModalActions = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
`;

export const Option = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 10px 5px 0 5px;
  padding: 15px 0;
  width: 40%;
  background: #10c86e;
  border-radius: 50px;
`;

export const OptionLabel = styled.Text`
  color: #fff;
  font-size: 16px;
  text-transform: uppercase;
  margin-left: 7px;
  font-weight: bold;
`;
