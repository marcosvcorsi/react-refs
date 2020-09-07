import React, { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input: React.RefForwardingComponent<HTMLInputElement, InputProps> = (
  { label, name, ...rest },
  ref
) => {
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input type="text" {...rest} ref={ref} />
    </div>
  );
};

export default forwardRef(Input);
