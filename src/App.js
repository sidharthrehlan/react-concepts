import React from 'react';

import ClickCounterHook from './components/ClickCounterHook';
//import ClickCounter from './components/ClickCounter';
import HoverCounterHook from './components/HoverCounterHook';

function App() {
  return (
    <div>
      <ClickCounterHook />
      <HoverCounterHook />
    </div>
  );
}

export default App;
