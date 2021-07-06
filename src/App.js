import React, { useState, useEffect } from "react";
import {
  List,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
} from "react-virtualized";
import faker from "faker";

function App() {
  const cache = React.useRef(
    new CellMeasurerCache({
      fixedWidth: true,
      defaultHeight: 100,
    })
  );

  const [people, setPeople] = useState([]);
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    setPeople(
      [...Array(100).keys()].map((key) => {
        return {
          id: key,
          name: `${faker.name.firstName()} ${faker.name.lastName()}`,
          bio: faker.lorem.lines(Math.random() * 100),
        };
      })
    );
  }, []);

  useEffect(() => {
    let timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  console.log(people);
  console.log(time);

  //function rowRenderer

  return (
    <div>
      <h1>{time.toString()}</h1>
      <div style={{ width: "100%", height: "100vh" }}>
        <AutoSizer>
          {({ width, height }) => (
            <List
              width={width}
              height={height}
              rowHeight={cache.current.rowHeight}
              deferredMeasurementCache={cache.current}
              rowCount={people.length}
              rowRenderer={({ key, index, style, parent }) => {
                const person = people[index];

                return (
                  <CellMeasurer
                    key={key}
                    cache={cache.current}
                    parent={parent}
                    columnIndex={0}
                    rowIndex={index}
                  >
                    <div style={style}>
                      <h2>{person.name}</h2>
                      <p>{person.bio}</p>
                    </div>
                  </CellMeasurer>
                );
              }}
            />
          )}
        </AutoSizer>
      </div>
    </div>
  );
}

export default App;
