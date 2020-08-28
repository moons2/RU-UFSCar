import AsyncStorage from '@react-native-community/async-storage';
import React, {createContext, useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
import Light from '~/modules/themes/light';
import Dark from '~/modules/themes/dark';
import {shade} from 'polished';
import {ThemeProvider as StyledProvider} from 'styled-components';

const ThemeContext = createContext({theme: Light, toggleTheme: () => {}});

export const ThemeProvider = ({children}) => {
  const [state, setState] = useState(Light);

  useEffect(() => {
    async function storageData() {
      const value = await AsyncStorage.getItem('@THEME');
      if (value) {
        setState(JSON.parse(value));
        StatusBar.setBackgroundColor(
          shade(0.1, JSON.parse(value).colors.primary),
        );
      } else {
        StatusBar.setBackgroundColor(shade(0.1, state.colors.primary));
      }
    }
    storageData();
    StatusBar.setTranslucent(false);
    StatusBar.setBarStyle('light-content');
  }, []);

  async function toggleTheme() {
    const next_theme = state.name === 'dark' ? Light : Dark;
    setState(next_theme);
    StatusBar.setBackgroundColor(shade(0.1, next_theme.colors.primary));
    await AsyncStorage.setItem('@THEME', JSON.stringify(next_theme));
  }

  // console.log(state); ESSE LOG E EXECUTADO 2 VEZEZ N SEI PQ
  return (
    <ThemeContext.Provider value={{theme: state, toggleTheme}}>
      <StyledProvider theme={state}>{children}</StyledProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
