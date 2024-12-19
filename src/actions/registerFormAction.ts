import {
  RegisterFormErrors,
  registerFormSchema,
} from "@/form-schemas/registerForm";

export default async function registerAction(
  _prevState: RegisterFormErrors,
  formData: FormData
) {
  const parsedFormData = registerFormSchema.safeParse({
    email: formData.get("email"),
    name: formData.get("name"),
    password: formData.get("password"),
    passwordConfirmation: formData.get("passwordConfirmation"),
  });

  if (!parsedFormData.success) {
    return parsedFormData.error.flatten().fieldErrors;
  }

  // const { email, name, password } = parsedFormData.data;

  // TODO: Add actual sign up logic
}
