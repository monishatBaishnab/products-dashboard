// Function to fetch product data from a JSON file
const fetchQuantities = async () => {
  try {
    // Fetch the products data from the local JSON file
    const response = await fetch("/quantities.json");

    // Parse the JSON response and return the product data
    const products = await response.json();

    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

// Object to encapsulate product-related services
export const quantityServices = {
  fetchQuantities,
};
