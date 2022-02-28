import React from 'react';

import './form-input.styles.scss';

export default function FormInput({ handleChange, label, ...props }) {
  return (
    <div className="formInput">
      <input className="formInput__input" onChange={handleChange} {...props} autoComplete="off"/>
      {label ? (
        <label className={`${props.value.length ? 'shrink' : ''} formInput__label`}>
          {label}
        </label>
      ) : null}
    </div>
  );
}
