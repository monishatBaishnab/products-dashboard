import { ArrowUpDown } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { productServices } from "../../services/product.services";
import { COLUMNS } from "./constants";

const DataTable = () => {
  const {
    data: products,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["products"],
    queryFn: productServices.fetchProducts,
  });

  return (
    <section className="bg-white shadow rounded-lg p-6 mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Product List</h2>
      <table className="min-w-full table-auto">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            {COLUMNS.map(({ label, key }) => (
              <th key={key} className="border border-gray-200">
                <div className="flex items-center justify-between px-4 py-2 !text-sm text-left cursor-pointer">
                  <span className="block">{label}</span>
                  <ArrowUpDown className="size-4" />
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
          ) : !products || products.length === 0 ? (
            <tr>
              <td
                className="text-center border px-4 py-2"
                colSpan={COLUMNS.length}
              >
                No Data Found
              </td>
            </tr>
          ) : (
            products.map((product) => (
              <tr key={product._id}>
                {COLUMNS.map((column) => {
                  const value = product?.[column.key] || "";
                  return (
                    <td
                      key={column.key}
                      className="px-4 py-2 text-sm border border-gray-200"
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
    </section>
  );
};

export default DataTable;
