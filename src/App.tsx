import React from 'react';
import styled from 'styled-components';

import './App.css';

function App() {
  return (
    <>
    <TitleP>PORT FOLIO</TitleP>
    <TitleP> "Hello! I'm KeemDaSol. Check out my portfolio and enjoy!"</TitleP>
    <TitleP>PORT FOLIO</TitleP>
  
    </>
  );
}
const TitleP = styled.p `
font-size: 128px;
  color: #F6EDD9;
  line-height: 180px;
  transform: translateX();
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

`;
export default App;
