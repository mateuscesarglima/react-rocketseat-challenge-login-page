import * as zod from "zod";

const schema = zod.object({
  email: zod.string().email({ message: "Insira um email válido" }),
  password: zod
    .string()
    .min(6, { message: "Sua senha deve ter no mínimo 6 caracteres" })
    .max(50),
});

type FormType = zod.infer<typeof schema>;

export { schema };
export type { FormType };
