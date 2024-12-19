"use server";

import { LogInFormErrors, logInFormSchema } from "@/form-schemas/logInForm";

export default async function logInAction(
  _prevState: LogInFormErrors,
  formData: FormData
) {
  const parsedFormData = logInFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parsedFormData.success) {
    return parsedFormData.error.flatten().fieldErrors;
  }

  // const { email, password } = parsedFormData.data;

  // TODO: Add actual sign in logic
}
