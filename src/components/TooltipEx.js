import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional

const StringContent = () => (
  <Tippy content="Hello">
    <button>My button</button>
  </Tippy>
);

const JSXContent = () => (
  <Tippy content={<span>Tooltip</span>}>
    <button>My button</button>
  </Tippy>
);

function TooltipEx() {
  return (
    <div>
      <StringContent></StringContent>
      <JSXContent></JSXContent>
    </div>
  );
}

export default TooltipEx;
