import React, { useEffect } from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';

import styles, { Container, Txt } from '~/modules/styles/index';
import Heart from 'react-native-vector-icons/MaterialCommunityIcons';
import StackHeader from '~/modules/components/StackHeader/index';
import analytics from '@react-native-firebase/analytics';

const About = ({ navigation }) => {
  useEffect(() => {
    trackScreen('about_screen');
  }, []);

  const trackScreen = async screen => {
    await analytics().logEvent(screen);
  };

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          //extensao bmp nao apareceu depois de gerado o apk.
          source={require('~/modules/images/portaria_ufscar.jpg')}
          resizeMode={'contain'}
          style={{ flex: 1, width: '100%', maxHeight: 320 }}
        />
        <Txt style={{ fontSize: 24, marginHorizontal: 16, marginVertical: 20 }}>
          RU UFSCar
        </Txt>

        <Txt style={[innerstyles.txt, styles.letterTheme]}>
          É um app para vizualização do cardápio diário do nosso RU (Restaurante
          Universitário) da Universidade Federal de São Carlos, campus São
          Carlos.
          {'\n\n'}O App tem uma proposta mais interativa e divertida, reaja ao
          cardápio do dia e seja noticiado sobre os principais eventos do
          período!
          {'\n\n'}
          Esta aplicação é de iniciativa pessoal e não conta com qualquer apoio
          da Universidade.
          {'\n'}
          {'\n'}O App é mantido e produzido por um time altamente qualificado de
          ovelhas que estão trabalhando meio período para oferecer os melhores
          serviços.
        </Txt>

        <View style={innerstyles.footnoteView}>
          <Txt style={innerstyles.footnoteText}>by github.com/moons2</Txt>
          <Txt style={innerstyles.footnoteText}>
            {' '}
            <Heart name="copyright" size={13} color="gray" /> 2020
            {'   '}
            <Txt style={{ color: 'red' }}>S2</Txt>
            2W
          </Txt>
        </View>
      </ScrollView>
    </Container>
  );
};

export default About;

About.navigationOptions = {
  header: props => <StackHeader props={props} value={'Informações'} />,
};

const innerstyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  txt: {
    fontSize: 18,
    textAlign: 'justify',
    marginHorizontal: 20,
  },
  footnoteView: {
    flex: 1,
    marginTop: 45,
    marginBottom: 0,
    alignItems: 'center',
  },
  footnoteText: {
    textAlign: 'center',
    fontSize: 12,
    color: 'rgb(169,171,173)',
  },
});
