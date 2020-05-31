import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  background: #000;
  flex: 1;
`;

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  padding: 0 16px;
`;

export const Logo = styled.Image.attrs(() => ({
  resizeMode: 'contain',
}))`
  margin-top: 25px;
  height: 125px;
  width: 125px;
`;

export const Header = styled.Text`
  font-size: 25px;
  text-align: center;
  font-weight: bold;
  color: #fff;
  margin-top: 10px;
`;

export const Footer = styled.Text`
  font-size: 20px;
  text-align: center;
  color: #fff;
  margin-top: 10px;
  line-height: 25px;
`;

export const AuthorizeButton = styled.TouchableOpacity`
  margin-top: 25px;
  padding: 20px 0;
  width: 80%;
  border-radius: 50px;
  background: #10c86e;
`;

export const AuthorizeLabel = styled.Text`
  font-size: 17px;
  text-align: center;
  font-weight: bold;
  color: #fff;
`;
