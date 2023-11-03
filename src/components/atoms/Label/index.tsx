import { LabelHTMLAttributes } from 'react';

type LabelType = LabelHTMLAttributes<HTMLLabelElement>;

export const Label = ({ ...rest }: LabelType) => {
  return (
    <label className='font-semibold' {...rest}></label>
  );
}