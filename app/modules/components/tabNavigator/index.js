import React, {useContext, useState} from 'react';
import {View, TouchableOpacity, Animated} from 'react-native';
import ThemeContext from '~/modules/contexts/themeContext.js';
import CustomIcon from '~/modules/components/customIcons/CustomIcon.js';

const TabBar = props => {
  const {theme} = useContext(ThemeContext);
  const {navigationState, navigation, position} = props;
  const [animation, setSanimation] = useState(new Animated.Value(0));
  const {routes, index: activeRouteIndex} = navigationState; //console.log(navigationState);

  return (
    <View
      style={{
        height: 44,
        marginTop: 44,
        backgroundColor: theme.colors.primary,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}>
      {navigationState.routes.map((route, index) => {
        const focusAni = animation.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [0, 1, 0],
        });

        const isActive = index === activeRouteIndex;

        return (
          <Tab
            key={route.key}
            focusAnimation={focusAni}
            title={route.routeName}
            focused={isActive}
            onPress={() => navigation.navigate(route.routeName)}
          />
        );
      })}
    </View>
  );
};

const Tab = ({focusAnimation, title, onPress, focused}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Animated.View style={{padding: 10}}>
        <CustomIcon
          name={
            title === 'Cardapio'
              ? focused
                ? 'homefocused'
                : 'home'
              : focused
              ? 'bellfocused'
              : 'bell'
          }
          color={'#FFF'}
          size={24}
        />
      </Animated.View>
    </TouchableOpacity>
  );
};

export default TabBar;
