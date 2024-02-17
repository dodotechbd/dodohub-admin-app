import { UserAuthForm } from "@components/auth";
import { Icons } from "@components/theme";
import { Layout } from "@enums";
import Head from "next/head";

const AuthenticationPage = () => {
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
        <div className="absolute lg:hidden top-5 left-5 z-20 flex gap-1 items-center text-lg font-medium">
          <Icons.logo />
          DodoHub Admin
        </div>
        <div className="hidden w-full h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r bg-zinc-900">
          <div className="flex items-center gap-3 text-lg font-medium">
            <Icons.logo type="white" />
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
};

AuthenticationPage.layout = Layout.AUTH;

export default AuthenticationPage;
