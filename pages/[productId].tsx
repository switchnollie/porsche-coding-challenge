import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import httpService from "~/utils/httpService";
import { Product } from "~/utils/types";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let product: Product | null = null;

  if (params?.productId) {
    try {
      product = await httpService.getProduct(params.productId as string);
    } catch (err) {
      console.error(err);
    }
  }

  return {
    props: { product },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  let products: Product[];
  try {
    products = await httpService.getProducts();
  } catch (err) {
    products = [];
  }
  const paths = products.map((product) => ({
    params: { productId: product.id },
  }));

  return { paths, fallback: false };
};

interface ProductDetailsPageProps {
  product: Product;
}

export default function ProductDetailsPage({
  product: { title, description },
}: ProductDetailsPageProps) {
  return (
    <div>
      <Head>
        <title>Porsche Products · {title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Link href="/">← Back</Link>
        <h1>{title}</h1>
        <p>{description}</p>
      </main>
    </div>
  );
}
