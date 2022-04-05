import React from 'react';

function Records({ id, title }) {
  return (
    <div>
      <span>Title : {title}</span>
      <span>Id : {id}</span>
    </div>
  );
}

export default Records;
