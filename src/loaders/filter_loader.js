import { API_BASE_URL } from "../config/api";

export const loadFilters = async () => {
  // First, fetch all categories
  const categoriesResponse = await fetch(`${API_BASE_URL}/categories`);
  if (!categoriesResponse.ok) {
    throw new Error("Failed to load categories");
  }
  const categories = await categoriesResponse.json();

  // Extract all products from all categories
  const allProducts = categories.flatMap((category) => category.products || []);

  // Get unique brands
  const brands = [
    ...new Set(allProducts.map((product) => product.brand)),
  ].sort();

  // Get unique colors
  const colors = [
    ...new Set(
      allProducts.flatMap(
        (product) => product.variants?.flatMap((variant) => variant.color) || []
      )
    ),
  ].sort();

  // Get price range
  const prices = allProducts.map((product) => product.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  const filters = {
    brands,
    colors,
    priceRange: { min: minPrice, max: maxPrice },
    categories: categories.map((cat) => ({ id: cat.id, name: cat.name })),
  };

  console.log("Filter data loaded:", filters, brands);
  return filters;
};
