import { logo } from '@Assets/index';
import { Form } from "@Components/organisms";
import { Header } from "@Components/organisms/Header";
import { FormType, schema } from "@Utils/formUtil";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";


export const Login = () => {
  const loginForm = useForm<FormType>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  return (
    <section className="grid bg-gray-50 min-h-screen md:grid-cols-2">
      <div className="max-w-2xl h-full px-[3rem] py-[1.5rem] lg:px-[7rem] lg:py-[2.5rem]">
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
      <div className="md:bg-img-purple hidden md:block bg-no-repeat bg-cover h-full w-full" />
    </section>
  );
}