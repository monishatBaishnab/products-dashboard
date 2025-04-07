// Apply filters based on the name and code filters
const applyFilters = (products, filters) => {
  return products.filter((product) => {
    const nameMatch = product.name
      .toLowerCase()
      .includes(filters.name.toLowerCase());
    const codeMatch = product.code
      .toLowerCase()
      .includes(filters.code.toLowerCase());
    return nameMatch && codeMatch;
  });
};
export default applyFilters;
