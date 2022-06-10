import React, { useEffect, useRef } from 'react';

function Iframe(props) {
  const iframeRef = useRef();

  useEffect(() => {
    iframeRef.current.contentWindow.onLoad = () => {
      console.log('onload');
    };

    // iframe.onload = () => this.props.onLoad;
    return () => {
      // const iframe = ReactDOM.findDOMNode(this.refs.iframe);

      //  iframe.onload = null;

      iframeRef.current.contentWindow.onLoad = null;
    };
  }, []);

  return (
    <iframe
      ref={iframeRef}
      {...props}
      frameBorder='0'
      width='100%'
      height='100%'
    />
  );
}

export default Iframe;

// export default class Iframe extends React.Component {
//     componentDidMount() {
//       const iframe = ReactDOM.findDOMNode(this.refs.iframe)

//       iframe.onload = () => this.props.onLoad
//     }

//     componentWillUnmount() {
//       const iframe = ReactDOM.findDOMNode(this.refs.iframe)

//       iframe.onload = null
//     }

//     render() {
//       const {styleClassName, children, ...props} = this.props

//       return (
//         <div className={styleClassName}>
//           {children}
//           <iframe
//             ref='iframe'
//             {...props}
//             frameBorder='0'
//             width='100%'
//             height='100%'
//           />
//         </div>
//       )
//     }
//   }
