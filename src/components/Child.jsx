import React from "react";

const Child = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" name="fname" id="fname" ref={ref} />
    </div>
  );
});

export default Child;
