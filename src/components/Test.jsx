import React, { useEffect, useState } from 'react';

function Test() {
  const [name, setName] = useState('');
  const [lname, setLname] = useState('');
  useEffect(() => {
    console.log('onMount');
    return () => {
      console.log('unmount');
    };
  }, []);

  useEffect(() => {
    console.log('Every Render');
  });

  useEffect(() => {
    console.log('on rerender');
  }, [name]);

  return (
    <div>
      Firstname{' '}
      <input
        type='text'
        name='firstName'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      Lastname{' '}
      <input
        type='text'
        name='lastname'
        value={lname}
        onChange={(e) => setLname(e.target.value)}
      />
    </div>
  );
}

export default Test;
