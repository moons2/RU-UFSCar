import React, {useContext} from 'react';
import {Switch, View, StyleSheet} from 'react-native';
import {Txt, Container} from '~/modules/styles/';
import StackHeader from '~/modules/components/StackHeader/index';
import ThemeContext from '~/modules/contexts/themeContext.js';

const Settings = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <Container style={{marginTop: 44, zIndex: 0}}>
      <View>
        <Txt style={Styles.settings_title}>Geral</Txt>
        <View style={Styles.settings_item}>
          <Txt>Modo escuro</Txt>
          <Switch
            onChange={() => toggleTheme()}
            value={theme.name === 'dark'}
            trackColor={{true: '#BBDEFB', false: '#C4C4C4'}}
            thumbColor={theme.name === 'dark' ? '#1565C0' : null}
          />
        </View>

        <View style={Styles.settings_item}>
          <Txt>Desabilitar notificações</Txt>
          <Switch onChange={() => {}} value={false} />
        </View>

        <View style={Styles.settings_item}>
          <Txt>Avise-me quando for</Txt>
          <Switch onChange={() => {}} value={false} />
        </View>
      </View>
    </Container>
  );
};

Settings.navigationOptions = {
  header: props => <StackHeader props={props} value={'Configurações'} />,
};

export default Settings;

const Styles = StyleSheet.create({
  settings_item: {
    marginHorizontal: 16,
    height: 38,
    marginVertical: 5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  settings_title: {
    marginHorizontal: 16,
    marginVertical: 10,
    fontSize: 18,
  },
});
