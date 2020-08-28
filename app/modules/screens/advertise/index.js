import React from 'react';
import {Text, View} from 'react-native';

import styles from '~/modules/styles/index';

const Advertise = ({navigation}) => {
  return (
    <View>
      <Text>Roy</Text>
    </View>
  );
};

Advertise.navigationOptions = {
  title: <Text style={styles.stackTitle}>Anuncio</Text>,
  headerStyle: {
    backgroundColor: styles.theme.backgroundColor,
    elevation: 0,
    shadowOpacity: 0,
    height: 44,
  },
  headerTitleStyle: {
    justifyContent: 'center',
  },
  headerTintColor: '#fff',
};

export default Advertise;
