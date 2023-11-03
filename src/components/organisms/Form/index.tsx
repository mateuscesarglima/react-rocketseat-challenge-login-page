/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button, Label } from "@Components/atoms";
import { FormItem } from "@Components/molecules";
import { FormType } from "@Utils/formUtil";
import { useState } from "react";
import { useFormContext } from "react-hook-form";



export const Form = () => {
  const { formState: { errors }, control, handleSubmit } = useFormContext<FormType>()
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }
  const submit = (data: FormType) => {
    console.log('DATA', data)
  }

  return (
    <>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(submit)}>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email" children={"Email"} />
          <FormItem
            type="email"
            name="email"
            activeIcon={false}
            control={control}
            error={errors && errors.email?.message}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <Label htmlFor="password" children={"Senha"} />
            <span onClick={() => console.log('Esqueci a senha')} className="text-purple font-semibold cursor-pointer">Esqueceu sua senha?</span>
          </div>
          <div className="relative">
            <FormItem
              type={showPassword ? 'text' : 'password'}
              name="password"
              activeIcon={true}
              control={control}
              error={errors && errors.password?.message}
              handleShowPassword={handleShowPassword}
              showPassword={showPassword}
            />
          </div>
        </div>
        <Button type="submit">
          Entrar
        </Button>
      </form>
    </>
  );
}