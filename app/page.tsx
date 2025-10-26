import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-[#15191D] rounded-lg sm:items-start">
        <Image
          src="/logo.png"
          alt="Next.js logo"
          width={200}
          height={40}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-zinc-50">
            Trade APP.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-400">
            A powerful and easy-to-use trading platform designed for fast, secure, and informed investing. Monitor live market trends, analyze assets, and manage your portfolio — all in one place.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <Link
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] md:w-[158px]"
            href="/frameOne"
          >
            Frame 1
          </Link>
          <Link
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid bg-white/8 border-white/8 px-5 transition-colors text-zinc-50 hover:border-transparent hover:bg-black/4 md:w-[158px]"
            href="frameTwo"
          >
            Frame 2
          </Link>
        </div>
      </main>
    </div>
  );
}
