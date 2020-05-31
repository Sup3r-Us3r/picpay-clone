import styled from 'styled-components/native';
import {FlatList} from 'react-native';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background: #000;
`;

export const Label = styled.Text`
  font-size: 20px;
  color: #000;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
  padding: 0 16px;
`;

export const NotificationLabel = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;

export const SettingsButton = styled.TouchableOpacity``;

export const SettingsLabel = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #0db060;
`;

export const NotificationsList = styled(FlatList)`
  margin-top: 15px;
  margin-bottom: 10px;
`;

export const MessageContainer = styled.TouchableOpacity``;

export const Message = styled.Text`
  color: #fff;
  font-size: 16px;
  line-height: 22px;
  margin: 10px 16px 0 16px;
  padding: 16px 16px;
  background: #1e222b;
  border-radius: 8px;
`;
