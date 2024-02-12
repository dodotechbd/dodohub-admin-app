import "@/styles/globals.css";
import { ThemeProvider } from "@components/theme";
import { Layout } from "@enums";
import { DashboardLayout } from "@layouts";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";

export type NextPageWithLayout<P = any, IP = P> = NextPage<P, IP> & {
  layout: string;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const { layout } = Component;

  const getLayout = () => {
    switch (layout) {
      case Layout.AUTH:
        return (
          // <AuthLayout>
          <Component {...pageProps} />
          // </AuthLayout>
        );
      case Layout.SIDEBAR:
        return (
          <DashboardLayout>
            <Component {...pageProps} />
          </DashboardLayout>
        );
      default:
        return <Component {...pageProps} />;
    }
  };

  return (
    <>
      <Head>
        <title>Dodohub Admin</title>
        <meta name="description" content="Dodohub Admin App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider>{getLayout()}</ThemeProvider>
    </>
  );
}
