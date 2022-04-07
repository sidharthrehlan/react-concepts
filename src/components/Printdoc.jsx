import React from 'react';
import printJS from 'print-js';

function Printdoc() {
  const imagePath = process.env.PUBLIC_URL + '/logo512.png';
  const clickHandler = () => {
    printJS(imagePath, 'image');
  };

  return (
    <div>
      <img src={process.env.PUBLIC_URL + '/logo512.png'} />
      <button onClick={clickHandler}>Print Image</button>
    </div>
  );
}

export default Printdoc;
