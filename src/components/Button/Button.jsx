import React from 'react';
import styles from './Button.module.css';
import './external.css';
function Button() {
  return (
    <>
      {/** CSS modules */}
      <button className={styles.success}>Click me</button>
      {/**Inline css */}
      <button style={{ 'background-color': 'red' }}>Click me</button>

      {/**external css */}
      <button className='warning'>Click me</button>
    </>
  );
}

export default Button;
