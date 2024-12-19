import RegisterForm from "@/components/RegisterForm";

export default function Page() {
  return (
    <main className="relative flex w-screen h-screen items-center justify-center  overflow-hidden">
      <div className="z-10 w-fit h-fit p-8 rounded-lg border backdrop-blur-sm bg-white/30">
        <div className="flex justify-center mb-4 text-2xl font-bold">
          Join Hanashi
        </div>
        <RegisterForm />
      </div>
    </main>
  );
}
