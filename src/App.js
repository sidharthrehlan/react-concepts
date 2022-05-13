import React from 'react';
import Button from './components/Button/Button';
import Header from './components/Header';
import StyledButton, {
  FancyButton,
  SubmitButton,
  DarkButton,
} from './components/StyledButton/StyledButton';

//theming using themeprovider

import { ThemeProvider } from 'styled-components';

const theme = {
  dark: {
    primary: '#000',
    color: '#fff',
  },
  light: {
    primary: '#fff',
    color: '#000',
  },
};

function App() {
  return (
    //   <>
    //   <Button></Button>
    //   <Header></Header>
    //   <br />
    //   <StyledButton>Delete</StyledButton>
    //   <br />
    //   <br />
    //   <StyledButton variant='outline'>Delete</StyledButton>
    //   <br />
    //   <FancyButton variant='outline'>Delete</FancyButton>
    //   <br />
    //   <SubmitButton variant='outline'>Delete</SubmitButton>
    // </>

    <ThemeProvider theme={theme}>
      <Button></Button>
      <Header></Header>
      <br />
      <StyledButton>Delete</StyledButton>
      <br />
      <br />
      <StyledButton variant='outline'>Delete</StyledButton>
      <br />
      <FancyButton variant='outline'>Delete</FancyButton>
      <br />
      <SubmitButton variant='outline'>Delete</SubmitButton>

      <br />
      <DarkButton>Delete</DarkButton>
    </ThemeProvider>
  );
}

export default App;
