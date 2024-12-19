import { z } from "zod";

export const logInFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export type LogInFormErrors =
  | {
      message?: string | undefined;
      email?: string[] | undefined;
      password?: string[] | undefined;
    }
  | undefined;
export type LogInFormData = z.infer<typeof logInFormSchema>;
