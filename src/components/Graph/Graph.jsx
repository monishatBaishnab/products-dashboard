import { useQuery } from "@tanstack/react-query";
import { quantityServices } from "../../services/quantity.services";

const Graph = () => {
  const {
    data: quantities,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["quantities"],
    queryFn: quantityServices.fetchQuantities,
    refetchOnWindowFocus: false,
  });
  console.log(quantities);

  return (
    <section className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Stock Quantity by Category
      </h2>
      {/* Placeholder for Graph */}
      <div className="bg-gray-100 h-60 rounded-lg flex items-center justify-center text-gray-500">
        
      </div>
    </section>
  );
};

export default Graph;
