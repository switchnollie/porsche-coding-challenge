import { GetStaticProps } from "next";
import Head from "next/head";
import FeaturedProducts from "~/sections/FeaturedProducts";
import ProductOverview from "~/sections/ProductOverview";
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
    <>
      <Head>
        <title>Porsche Product Gallery</title>
        <meta
          name="description"
          content="A gallery that showcases products by Porsche"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <FeaturedProducts products={products} />
        <ProductOverview products={products} />
      </main>
    </>
  );
}
