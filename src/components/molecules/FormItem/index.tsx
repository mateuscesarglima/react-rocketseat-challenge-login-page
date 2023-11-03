/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from '@Components/atoms';
import { InputHTMLAttributes } from 'react';
import { Control, Controller } from 'react-hook-form';


type FormItemType = InputHTMLAttributes<HTMLInputElement> & {
  error: string | undefined;
  activeIcon: boolean;
  control: Control<{
    email: string;
    password: string;
  }, any>;
  showPassword?: boolean;
  handleShowPassword?: () => void;
  name: 'email' | 'password';
  type: 'text' | 'password' | 'email';
}

export const FormItem = ({ error, activeIcon, control, showPassword, handleShowPassword, name, type }: FormItemType) => {
  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field }) => <Input
          {...field}
          placeholder="Digite seu e-mail"
          type={type}
          className={error ? 'border-red-400' : ''}
          activeIcon={activeIcon}
          handleShowPassword={handleShowPassword}
          showPassword={showPassword}
        />}
      />
      {error && <span className="text-red-400">{error}</span>}
    </div>
  );
}