import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Porsche Product Gallery</title>
        <meta
          name="description"
          content="A gallery that showcases products by Porsche"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Porsche Product Gallery</h1>
      </main>
    </div>
  );
}
