import React from 'react';
import Counter from './components/counter';
import { GlobalStyle } from './styles/globalStyle'
import { Container } from './styles/pages/app'

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Container>
          <Counter/>
        </Container>
      </div>
    </>
  );
}


export default App;
