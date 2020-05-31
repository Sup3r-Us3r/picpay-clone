import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Wrapper = styled.View`
  background: #000;
  flex: 1;
`;

export const BannerContainer = styled(LinearGradient)`
  height: 300px;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
`;

export const UserData = styled.View`
  align-items: center;
`;

export const Help = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #222;
  align-self: flex-end;
`;

export const Avatar = styled.Image.attrs(() => ({
  resizeMode: 'contain',
}))`
  height: 130px;
  width: 130px;
  margin-bottom: 10px;
`;

export const NickLabel = styled.Text`
  font-size: 23px;
  font-weight: bold;
  color: #fff;
`;

export const UsernameLabel = styled.Text`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
`;

export const MyProfile = styled.Text`
  margin-top: 7px;
  font-size: 16px;
  font-weight: bold;
  color: #222;
`;

export const MyAccount = styled.Text`
  margin-top: 15px;
  font-size: 16px;
  font-weight: bold;
  color: #222;
  align-self: flex-start;
`;

export const ContainerOptions = styled.ScrollView`
  background: transparent;
`;

export const Option = styled.Text`
  padding: 16px;
  background: #1e222b;
  margin-bottom: 2px;
  color: #fff;
`;
