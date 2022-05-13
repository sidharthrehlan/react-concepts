import React from 'react';

function Accordian({ children }) {
  console.log(React.Children.count(children));
  //   React.Children.map((item) => {
  //     console.log(item);
  //   });

  return <div>{children}</div>;
}

export default Accordian;
