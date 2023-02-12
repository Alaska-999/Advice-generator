import React from 'react';
import GlobalStyle from "./styles/global";
import styled from "styled-components";
import Advice from "./components/Advice";


const App: React.FC = () => {
    return (
        <Wrapper className="App">
            <GlobalStyle/>
            <Advice></Advice>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--blue-dark);
  display: flex;
  justify-content: center;
  align-items: center;
`

export default App;
