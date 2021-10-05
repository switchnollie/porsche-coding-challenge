import { ReactNode } from "react";
import Head from "next/head";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/fonts/PorscheNext/PorscheNextWLa-Regular.woff2"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/PorscheNext/PorscheNextWLa-Bold.woff2"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/PorscheNext/PorscheNextWLa-Thin.woff2"
          as="font"
          crossOrigin=""
        />
      </Head>
      {children}
    </>
  );
}
