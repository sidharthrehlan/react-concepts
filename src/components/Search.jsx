import React, { useState } from 'react';

function Search({ onSearchByName }) {
  const [sval, setSValue] = useState('');
  // const searchField = useRef('');
  const clickHandler = () => {
    onSearchByName(sval);
  };

  const changeHandler = (e) => {
    setSValue(e.target.value);
  };

  return (
    <div>
      <input type='text' value={sval} name='search' onChange={changeHandler} />
      <button onClick={clickHandler}>Search</button>
    </div>
  );
}

export default React.memo(Search);
