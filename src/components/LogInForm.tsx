"use client";

import { Button } from "./ui/button";
import { useActionState } from "react";
import logInAction from "@/actions/logInFormAction";
import InputField from "./InputField";
import Link from "next/link";

export default function LoginForm() {
  const [errors, action] = useActionState(logInAction, undefined);

  return (
    <form
      action={action}
      className="flex flex-col gap-4 justify-center w-[300px]"
    >
      <InputField
        label="Email"
        name="email"
        type="email"
        errors={errors?.email}
      />
      <InputField
        label="Password"
        name="password"
        type="password"
        errors={errors?.password}
      />
      <span className="flex justify-center gap-2">
        Don&apos;t have an account yet?
        <Link href={"/register"}>
          <span className="underline font-medium text-blue-600 hover:text-blue-800">
            Register
          </span>
        </Link>
      </span>
      <div className="flex justify-center">
        <Button>Login</Button>
      </div>
    </form>
  );
}
