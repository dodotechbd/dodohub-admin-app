import { UserAuthForm } from "@/components/auth";
import Head from "next/head";

export default function AuthenticationPage() {
  return (
    <>
      <Head>
        <title>Authentication</title>
        <meta
          name="description"
          content="Authentication forms for administration login"
        />
      </Head>
      <div className="container relative h-screen flex lg:flex-row flex-col items-center justify-center lg:max-w-none lg:px-0">
        <div className="absolute lg:hidden top-5 left-5 z-20 flex items-center text-lg font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-6 w-6"
          >
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
          </svg>
          DodoHub Admin
        </div>
        <div className="hidden w-full h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r bg-zinc-900">
          <div className="flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            DodoHub Admin
          </div>
          <div className="mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;Welcome to the Admin Portal! This secure gateway provides
                exclusive access to the administrative features and controls of
                our system.&rdquo;
              </p>
              <footer className="text-sm">Muhammad Shafi</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8 w-full">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Login In
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email and password to login
              </p>
            </div>
            <UserAuthForm />
          </div>
        </div>
      </div>
    </>
  );
}
