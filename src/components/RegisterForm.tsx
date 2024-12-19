"use client";

import registerAction from "@/actions/registerFormAction";
import InputField from "@/components/InputField";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useActionState } from "react";

export default function RegisterForm() {
  const [, action, isPending] = useActionState(registerAction, undefined);

  return (
    <form action={action}>
      <fieldset
        className="flex flex-col gap-4 justify-center w-[300px]"
        disabled={isPending}
      >
        <InputField label="Email" name="email" type="email" required />
        <InputField label="Name" name="name" type="text" required />
        <InputField label="Password" name="password" type="password" required />
        <InputField
          label="Password Confirmation"
          name="passwordConfirmation"
          type="password"
          required
        />
        <span className="flex justify-center gap-2">
          Already have an account?
          <Link href={"/login"}>
            <span className="underline font-medium text-blue-600 hover:text-blue-800">
              Login
            </span>
          </Link>
        </span>
      </fieldset>
      <div className="flex justify-center mt-4">
        <Button disabled={isPending}>Register</Button>
      </div>
    </form>
  );
}
