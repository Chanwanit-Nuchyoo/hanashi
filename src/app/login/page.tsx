import LoginForm from "@/components/LogInForm";

export default async function Page() {
  return (
    <main className="flex w-screen h-screen items-center justify-center">
      <div className="w-fit h-fit p-8  rounded-lg backdrop-blur-md bg-white/30 shadow-lg">
        <div className="flex justify-center mb-4 text-2xl font-bold">
          Welcome Back
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
