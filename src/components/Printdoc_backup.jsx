import React, { useState, useRef } from 'react';

function ChildIframe() {
  return (
    <iframe
      ref={printIframeRef}
      style={{
        position: 'fixed',
        right: '0',
        botton: '0',
        width: '0',
        height: '0',
        border: '0',
      }}
      src={imagePath}
      onLoad={loadHandler}
    ></iframe>
  );
}

function Printdoc() {
  const path = process.env.PUBLIC_URL + '/logo512.png';
  const [isPrintVisible, setPrintVisiblity] = useState(false);
  const [imagePath, setImagePath] = useState(null);
  const printIframeRef = useRef();
  const clickHandler = () => {
    //printJS(imagePath, 'image');
    setPrintVisiblity(true);
    setImagePath(path);
    // printIframeRef.current.contentWindow.focus(); // Required for IE
    // printIframeRef.current.contentWindow.print();
  };

  // const closePrint = () => {
  //   setPrintVisiblity(false);
  // };
  const loadHandler = () => {
    // printIframeRef.current.onafterprint = closePrint;
    printIframeRef.current.contentWindow.focus(); // Required for IE
    printIframeRef.current.contentWindow.print();
  };

  return (
    <div>
      <button onClick={clickHandler}>Print Image</button>

      {isPrintVisible && (
        <iframe
          ref={printIframeRef}
          style={{
            position: 'fixed',
            right: '0',
            botton: '0',
            width: '0',
            height: '0',
            border: '0',
          }}
          src={imagePath}
          onLoad={loadHandler}
        ></iframe>
      )}
    </div>
  );
}

export default Printdoc;
