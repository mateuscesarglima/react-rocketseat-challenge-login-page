import { Form } from "@Components/organisms";
import { Header } from "@Components/organisms/Header";
import { logo, rightImg } from '@Assets/index'
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormType, schema } from "@Utils/formUtil";


export const Login = () => {
  const loginForm = useForm<FormType>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  return (
    <section className="grid bg-gray-50 w-screen h-screen md:grid-cols-2">
      <div className="max-w-2xl px-[3rem] py-[1.5rem] lg:px-[7rem] lg:py-[2.5rem]">
        <img src={logo} alt="Project logo image" />
        <div id="form-container" className="flex flex-col gap-10 mt-[4rem] md:mt-[7.125rem]">
          <Header />
          <FormProvider {...loginForm}>
            <Form />
          </FormProvider>
          <footer>
            <p className="text-base">
              Ainda não tem uma conta?
              <span className="text-purple font-bold cursor-pointer"> Inscreva-se</span>
            </p>
          </footer>
        </div>
      </div>
      <div className="md:bg-purple hidden md:inline-block w-full">
        <img src={rightImg} alt="Purple image right side" className="mix-blend-screen h-screen w-full object-cover" />
      </div>
    </section>
  );
}