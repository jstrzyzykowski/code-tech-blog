import React from 'react'

import './custom-button.styles.scss';

export default function CustomButton({color, children, inverted, fluid, ...props}) {
  return(
    <button className={`${inverted ? 'customButton--inverted' : ''} ${fluid ? 'customButton--fluid' : ''} ${color} customButton `} {...props}>
      {children}
    </button>
  );
}