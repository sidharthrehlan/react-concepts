import React from 'react';
import Counter from './components/Counter';

// import ClickCounterHook from './components/ClickCounterHook';
// //import ClickCounter from './components/ClickCounter';
// import HoverCounterHook from './components/HoverCounterHook';

import ClickHandler from './components/propsRender/ClickCounter';

function App() {
  return (
    <div>
      <Counter>
        {(counter, incrementHandler, decrementHandler) => (
          <ClickHandler
            counter={counter}
            incrementHandler={incrementHandler}
            decrementHandler={decrementHandler}
          />
        )}
      </Counter>
    </div>
  );
}

export default App;
