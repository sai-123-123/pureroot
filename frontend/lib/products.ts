export type Category = "Ghee" | "Karam" | "Essentials";

export type Product = {
  id: number;
  name: string;
  category: Category;
  size: string;
  price: number;
  rating: number;
  reviews: number;
  badge?: string;
  image: string;
  description: string;
  ingredients?: string;
  benefits?: string;
};

const API_URL = "https://pureroot-ects.vercel.app/";

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(`${API_URL}/api/products`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}

export async function getProduct(
  id: number
): Promise<Product> {
  const response = await fetch(
    `${API_URL}/api/products/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Product not found");
  }

  return response.json();
}
