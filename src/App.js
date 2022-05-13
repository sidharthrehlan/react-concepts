import React from 'react';
import Accordian from './components/Accordian/Accordian';
import AccordianContent from './components/Accordian/AccordianContent';
import AccordianPanel from './components/Accordian/AccordianPanel';

function App() {
  return (
    <Accordian>
      <AccordianPanel>
        <AccordianContent>content 1</AccordianContent>
      </AccordianPanel>
      <AccordianPanel>
        <AccordianContent>Content2</AccordianContent>
      </AccordianPanel>
    </Accordian>
  );
}

export default App;
