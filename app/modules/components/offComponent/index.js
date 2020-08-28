import React from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import {Container, Txt} from '~/modules/styles/';

export default function Offline({
  handleRefresh = () => console.log('REFRESH FAILED!'),
}) {
  return (
    <Container
      style={{
        justifyContent: 'flex-end',
        alignItems: 'center',
        opacity: 0.8,
      }}>
      <Txt style={{fontSize: 28, textAlign: 'center'}}>
        (っ▀¯▀)つ{'\n'}Oops...
      </Txt>
      <Txt style={{margin: 25}}>Verifique sua conexão e tente novamente!</Txt>
      <TouchableOpacity style={Styles.btnOff} onPress={() => handleRefresh()}>
        <Txt style={{fontSize: 18, marginTop: -5, color: '#FFF'}}>
          Tentar novamente
        </Txt>
      </TouchableOpacity>
    </Container>
  );
}

const Styles = StyleSheet.create({
  btnOff: {
    height: 44,
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2D9CDB',
    borderRadius: 10,
  },
});
