import React, { useState, useRef } from 'react';

function ChildIframe(props) {
  const printIframeRef = useRef();

  const loadHandler = () => {
    // printIframeRef.current.onafterprint = closePrint;
    printIframeRef.current.contentWindow.focus(); // Required for IE
    printIframeRef.current.contentWindow.print();
    printIframeRef.current.contentWindow.onbeforeunload = props.closePrint;
    printIframeRef.current.contentWindow.onafterprint = props.closePrint;
  };

  return (
    <>
      <iframe
        title='printIframe'
        ref={printIframeRef}
        style={{
          position: 'fixed',
          right: '0',
          botton: '0',
          width: '0',
          height: '0',
          border: '0',
        }}
        src={props.imagePath}
        onLoad={loadHandler}
      ></iframe>
    </>
  );
}

function Printdoc(props) {
  const [isPrintVisible, setPrintVisiblity] = useState(false);
  const [imagePath, setImagePath] = useState(props.src);
  const path = process.env.PUBLIC_URL + '/logo512.png';

  const clickHandler = () => {
    setPrintVisiblity(true);
    setImagePath(path);
  };

  const closePrint = () => {
    setPrintVisiblity(false);
    setImagePath(null);
  };

  return (
    <div>
      <button onClick={clickHandler}>Mount component</button>

      {isPrintVisible && (
        <ChildIframe
          imagePath={imagePath}
          closePrint={closePrint}
        ></ChildIframe>
      )}
    </div>
  );
}

export default Printdoc;
