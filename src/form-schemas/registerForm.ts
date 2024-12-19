import { z } from "zod";

export const registerFormSchema = z
  .object({
    email: z.string().email(),
    name: z.string(),
    password: z.string().min(6),
    passwordConfirmation: z.string().min(6),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords do not match",
    path: ["passwordConfirmation"],
  });

export type RegisterFormErrors =
  | {
      message?: string | undefined;
      email?: string[] | undefined;
      name?: string[] | undefined;
      password?: string[] | undefined;
      passwordConfirmation?: string[] | undefined;
    }
  | undefined;
export type RegisterFormData = z.infer<typeof registerFormSchema>;
