import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex align-center h-15">
          <Link href={"/"} className="flex items-center">
            <Image
              src={"/Small_Logo.svg"}
              alt="Todolist do it Logo"
              width={71}
              height={40}
              className="block sm:hidden"
              priority
            />

            <Image
              src={"/Large_Logo.svg"}
              alt="Todolist do it Logo"
              width={151}
              height={40}
              className="hidden sm:block"
              priority
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
