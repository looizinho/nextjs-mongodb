import Image from "next/image";
import logo from "@/assets/logo.svg";
import logoDark from "@/assets/logo-dark.svg";
import { AuthButton } from "@/components/AuthButton";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex w-full max-w-sm flex-col items-center p-8">
        <div className="mb-8">
          <Image
            className="h-12 w-auto dark:hidden"
            src={logo}
            alt="CredencIA logo"
            priority
          />
          <Image
            className="hidden h-12 w-auto dark:block"
            src={logoDark}
            alt="CredencIA logo"
            priority
          />
        </div>
        
        <h1 className="mb-6 text-center text-3xl font-bold">Sistema descomplicado de credenciamento</h1>
        
        <AuthButton className="w-full rounded-full bg-[#00ED64] px-5 py-2.5 font-semibold tracking-tight text-[#001E2B] transition-colors duration-200 hover:bg-[#58C860] lg:px-7 lg:py-3" />
      </div>
    </div>
  );
}
