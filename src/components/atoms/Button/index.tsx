import { ButtonHTMLAttributes } from 'react';

type ButtonType = {
  children: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, ...rest }: ButtonType) => {
  return (
    <button className='bg-purple text-white py-4 px-6 font-bold text-base hover:bg-[#9F67FF] mt-8' {...rest}>
      {children}
    </button>
  );
}