import React from 'react';
import Header from '../Header.jsx';
import Detail from '../Detail.jsx';

export default function App() {
  return  <> 
    <Header /> 
    <Detail name="Dana Scully"
      image="https://vignette.wikia.nocookie.net/x-files/images/3/31/Absalom.jpg/revision/latest/scale-to-width-down/310?cb=20070708201919"
      status="alive"
      occupation="FBI Agent"
      actor="Gillian Anderson"/>
  </>;
}
  
