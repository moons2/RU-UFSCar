import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView,
  View,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Sound from 'react-native-vector-icons/AntDesign';
import Heart from 'react-native-vector-icons/MaterialCommunityIcons';

import styles, {Container, Txt} from '~/modules/styles/index';
import ThemeContext from '~/modules/contexts/themeContext.js';

export default function DrawerScreen({props}) {
  const {theme} = useContext(ThemeContext);

  function navigateToScreen(route) {
    props.navigate({routeName: route});
  }

  return (
    <Container>
      <ScrollView>
        <View>
          <TouchableWithoutFeedback onPress={() => navigateToScreen('Home')}>
            <View
              style={[
                styles.menuItem,
                {
                  borderBottomColor: '#373737',
                  borderBottomWidth: 1,
                  marginTop: 15,
                },
              ]}>
              <Heart
                style={innerstyles.aboutImg}
                color={theme.colors.text}
                size={20}
                name="silverware-fork-knife"
              />

              <Txt style={innerstyles.drawerLabelText}>Campus São Carlos</Txt>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => navigateToScreen('About')}>
            <View style={styles.menuItem}>
              <Icon
                style={innerstyles.aboutImg}
                color={theme.colors.text}
                size={20}
                name="info"
              />

              <Txt style={innerstyles.drawerLabelText}>Informações</Txt>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            onPress={() => navigateToScreen('Settings')}>
            <View style={styles.menuItem}>
              <Sound
                style={innerstyles.creditsImg}
                name="setting"
                size={20}
                color={theme.colors.text}
              />
              <Txt style={innerstyles.drawerLabelText}>Configurações</Txt>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
    </Container>
  );
}

DrawerScreen.propTypes = {
  navigation: PropTypes.object,
};

const innerstyles = StyleSheet.create({
  container: {
    height: '100%',
  },
  drawerLabelText: {
    fontSize: 16,
    marginLeft: 15,
  },
});

/**
 *         <View style={innerstyles.footnoteView}>
          <Text style={innerstyles.footnoteText}>
            with <Heart name="heart" size={13} color="red" /> by S22W
          </Text>
        </View>
 */
