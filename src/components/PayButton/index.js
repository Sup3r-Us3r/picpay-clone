import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Button, Label} from './styles';

export default function PayButton({focused}) {
  return (
    <Button
      colors={focused ? ['#fff', '#ccc'] : ['#00fc6c', '#00ac4a']}
      start={{x: 1, y: 0.2}}>
      <Icon name="attach-money" color={focused ? '#000' : '#fff'} size={30} />
      <Label focused={focused}>Pagar</Label>
    </Button>
  );
}
