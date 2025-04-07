import { useQuery } from "@tanstack/react-query";
import { quantityServices } from "../../services/quantity.services";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

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

  return (
    <section className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Stock Quantity by Category
      </h2>

      {isLoading || isFetching ? (
        <div className="text-center text-gray-500 h-96 flex items-center justify-center">
          Loading charts...
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {/* Bar Chart */}
          <div className="bg-gray-50 h-96 rounded-lg p-4">
            <h3 className="text-lg font-medium mb-2 text-gray-700">Bar Chart</h3>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={quantities}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="totalStockQuantity" fill="#60a5fa" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Line Chart */}
          <div className="bg-gray-50 h-96 rounded-lg p-4">
            <h3 className="text-lg font-medium mb-2 text-gray-700">Line Chart</h3>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={quantities}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="totalStockQuantity"
                  stroke="#34d399"
                  strokeWidth={3}
                  dot={{ r: 5 }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </section>
  );
};

export default Graph;
