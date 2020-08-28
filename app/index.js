import React from 'react';
import {ThemeProvider} from './modules/contexts/themeContext.js';
import Routes from './routes';

export default function App() {
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  );
}
