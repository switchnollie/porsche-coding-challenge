import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import httpService from "~/utils/httpService";
import { Product } from "~/utils/types";

export const getStaticProps: GetStaticProps = async () => {
  let products: Product[];
  try {
    products = await httpService.getProducts();
  } catch (err) {
    products = [];
  }
  return {
    props: { products },
  };
};

interface HomePageProps {
  products: Product[];
}

export default function Home({ products }: HomePageProps) {
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
        {products.map(({ title, id }) => (
          <>
            <h5 key={id}>{title}</h5>
            <Link href={`/${id}`}>Show Details</Link>
          </>
        ))}
      </main>
    </div>
  );
}
