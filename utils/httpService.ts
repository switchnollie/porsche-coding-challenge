import { Product } from "./types";

interface JSONResponseProducts {
  statusCode: number;
  body: {
    [key: string]: Product;
  };
}

class HttpService {
  private apiKey: string;
  constructor(apiKey?: string) {
    if (!apiKey) {
      throw new Error("No API Key was provided");
    }
    this.apiKey = apiKey;
  }

  private async _runProductsQuery() {
    try {
      const result = await fetch(
        "https://4itjlzc4oa.execute-api.eu-central-1.amazonaws.com/prod",
        {
          headers: {
            "x-api-key": this.apiKey,
          },
        }
      );
      return result;
    } catch (err) {
      console.error("Error performing Products API Request", err);
      throw err;
    }
  }

  async getProducts(): Promise<Product[]> {
    try {
      const result = await this._runProductsQuery();
      const resultJson = (await result.json()) as JSONResponseProducts;
      return Object.values(resultJson.body);
    } catch (err) {
      throw err;
    }
  }

  /**
   * Runs a Product Query for a specific ID.
   * This requests all products and filters after the request was made.
   * Ideally, a seperate endpoint should be provided for individual products.
   *
   * @param id the product ID
   * @returns The product that was fetched from the API
   */
  async getProduct(id: string): Promise<Product> {
    try {
      const result = await this._runProductsQuery();
      const resultJson = (await result.json()) as JSONResponseProducts;
      return resultJson.body[id];
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}

export default new HttpService(process.env.API_KEY);
