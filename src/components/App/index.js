import React from 'react';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Header from '../Header';
import Nav from '../Nav';
import DataStubber from '../DataStubber';

const theme = createMuiTheme({
    palette: {
        primary: {
            //Readlee orange
            main: "#FF8066"
        },
        secondary: {
            //Readlee blue/navy
            main: '#0292B0',
            dark: '#0C0C63'
        },
    },
});

function App() {
  return (
      <React.Fragment>
          <ThemeProvider theme={theme}>
              <Header />
              <Nav />
              <DataStubber />
        </ThemeProvider>
      </React.Fragment>
  );
}

export default App;
