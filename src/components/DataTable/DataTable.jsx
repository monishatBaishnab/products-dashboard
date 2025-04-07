import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { productServices } from "../../services/product.services";
import { COLUMNS } from "./constants";
import { useEffect, useState } from "react";
import sortItems from "../../utils/sortItems";
import applyFilters from "../../utils/applyFilters";

const DataTable = () => {
  const {
    data: products,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["products"],
    queryFn: productServices.fetchProducts,
    refetchOnWindowFocus: false,
  });

  // -- Component States --
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchFilters, setSearchFilters] = useState({
    name: "",
    code: "",
  });
  const [sortConfig, setSortConfig] = useState({
    columnKey: null,
    sortOrder: "asc",
  });

  // Function to handle sorting when a column header is clicked
  const handleSortChange = (columnKey) => {
    let newSortOrder = "asc";
    if (sortConfig.columnKey === columnKey) {
      newSortOrder = sortConfig.sortOrder === "asc" ? "desc" : "asc";
    }
    setSortConfig({ columnKey, sortOrder: newSortOrder });
  };

  // Update filtered products based on search filters
  useEffect(() => {
    if (products) {
      let filtered = applyFilters(products, searchFilters); // Apply filters first
      if (sortConfig.columnKey) {
        // If sorting is enabled, sort the filtered products
        filtered = sortItems(sortConfig, filtered);
      }
      setFilteredProducts(filtered);
    }
  }, [products, searchFilters, sortConfig]);
  return (
    <section className="bg-white shadow rounded-lg p-6 mb-8">
      <div className="flex items-center justify-center sm:justify-between mb-4 flex-wrap sm:flex-nowrap gap-3">
        <h2 className="text-xl font-semibold text-gray-800">Product List</h2>
        <div className="flex items-center gap-2">
          <input
            value={searchFilters.name}
            onChange={(e) =>
              setSearchFilters({
                ...searchFilters,
                name: e.currentTarget.value,
              })
            }
            className="w-full outline-none focus:outline-none px-4 py-1.5 border border-gray-200 rounded"
            type="text"
            placeholder="Search names..."
          />
          <input
            value={searchFilters.code}
            onChange={(e) =>
              setSearchFilters({
                ...searchFilters,
                code: e.currentTarget.value,
              })
            }
            className="w-full outline-none focus:outline-none px-4 py-1.5 border border-gray-200 rounded"
            type="text"
            placeholder="Search codes..."
          />
        </div>
      </div>
      <div className="w-full h-full overflow-auto">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              {COLUMNS.map(({ label, key }) => (
                <th
                  onClick={() => handleSortChange(key)}
                  key={key}
                  className="border border-gray-200"
                >
                  <div className="flex items-center justify-between px-4 py-2 !text-sm text-left cursor-pointer">
                    <span className="block text-nowrap">{label}</span>
                    {sortConfig.columnKey === key ? (
                      sortConfig.sortOrder === "asc" ? (
                        <ArrowUp className="size-4" />
                      ) : (
                        <ArrowDown className="size-4" />
                      )
                    ) : (
                      <ArrowUpDown className="size-4" />
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-gray-600">
            {isLoading || isFetching ? (
              Array.from({ length: 4 }).map((_, index) => (
                <tr key={index} className="animate-pulse">
                  {COLUMNS.map((column) => (
                    <td
                      key={column.key}
                      className="px-4 py-2 text-sm border border-gray-200 bg-gray-100 animate-pulse"
                    >
                      <div className="h-5 bg-gray-200 rounded w-full"></div>
                    </td>
                  ))}
                </tr>
              ))
            ) : !filteredProducts || filteredProducts.length === 0 ? (
              <tr>
                <td
                  className="text-center border px-4 py-2"
                  colSpan={COLUMNS.length}
                >
                  No Data Found
                </td>
              </tr>
            ) : (
              filteredProducts.map((product) => (
                <tr key={product._id}>
                  {COLUMNS.map((column) => {
                    const value = product?.[column.key] || "";
                    return (
                      <td
                        key={column.key}
                        className="px-4 py-2 text-sm border border-gray-200 text-nowrap"
                      >
                        {value}
                      </td>
                    );
                  })}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default DataTable;
