import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <Counter>
        {(count, actionHandler) => (
          <HoverCounter count={count} actionHandler={actionHandler} />
        )}
      </Counter>
      <Counter>
        {(count, actionHandler) => (
          <ClickCounter count={count} actionHandler={actionHandler} />
        )}
      </Counter>
    </>
  );
}

export default App;
