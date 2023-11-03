
import { Eye, EyeSlash } from '@phosphor-icons/react';
import { InputHTMLAttributes } from 'react';

type InputType = InputHTMLAttributes<HTMLInputElement> & {
  activeIcon: boolean;
  showPassword?: boolean;
  handleShowPassword?: () => void;

};

export const Input = ({ className, activeIcon, handleShowPassword, showPassword, ...rest }: InputType) => {
  return (
    <div>
      <input className={`w-full px-3 py-4 rounded-md outline-none border-2 border-gray-200 focus:border-purple ${className} `}  {...rest} />
      {activeIcon &&
        <div className='absolute top-3.5 right-2 '>
          {showPassword ?
            <span onClick={handleShowPassword}>
              <Eye size={30} className="cursor-pointer text-gray-400" />
            </span>
            :
            <span onClick={handleShowPassword}>
              <EyeSlash size={30} className=" cursor-pointer text-gray-400" />
            </span>
          }
        </div>
      }
    </div>
  );
}