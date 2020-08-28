import {HeaderBar, Txt} from '~/modules/styles/index';
import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ThemeContext from '~/modules/contexts/themeContext.js';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/Feather';

const StackHeader = ({props, value}) => {
  const {theme} = useContext(ThemeContext);

  return (
    <HeaderBar style={{backgroundColor: theme.colors.primary}}>
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <Icon
          name={'arrow-back'}
          size={24}
          color={'#FFF'}
          style={{zIndex: 1}}
        />
      </TouchableOpacity>

      <Txt style={{color: '#FFF', fontSize: 16}}>{value}</Txt>
      <Icon
        name={'arrow-back'}
        size={24}
        color={'transparent'}
        style={{zIndex: 1}}
      />
    </HeaderBar>
  );
};

export const StackMenuHeader = ({props, value}) => {
  const {theme} = useContext(ThemeContext);

  return (
    <HeaderBar
      style={{
        backgroundColor: theme.colors.primary,
        justifyContent: 'flex-start',
      }}>
      <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
        <Icons name={'menu'} size={24} color={'#FFF'} style={{zIndex: 1}} />
      </TouchableOpacity>

      <Txt
        style={{
          color: '#FFF',
          fontFamily: 'JosefinSans-SemiBold',
          fontSize: 18,
          marginLeft: 30,
        }}>
        {value}
      </Txt>

      <Icon
        name={'arrow-back'}
        size={24}
        color={'transparent'}
        style={{zIndex: 1}}
      />
    </HeaderBar>
  );
};

export default StackHeader;
