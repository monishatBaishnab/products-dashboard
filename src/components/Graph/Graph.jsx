import { useQuery } from "@tanstack/react-query";
import { quantityServices } from "../../services/quantity.services";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const COLORS = [
  "#60a5fa",
  "#34d399",
  "#fbbf24",
  "#f87171",
  "#a78bfa",
  "#fb7185",
  "#10b981",
  "#f472b6",
  "#818cf8",
  "#facc15",
];

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="h-96 w-full bg-gray-100 rounded-md animate-pulse" />
          <div className="h-96 w-full bg-gray-100 rounded-md animate-pulse" />
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {/* Bar Chart */}
          <div className="bg-gray-50 h-96 rounded-lg p-4 pb-10">
            <h3 className="text-lg font-medium mb-2 text-gray-700">
              Bar Chart
            </h3>
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

          {/* Pie Chart */}
          <div className="bg-gray-50 h-96 rounded-lg p-4 pb-10">
            <h3 className="text-lg font-medium mb-2 text-gray-700">
              Pie Chart
            </h3>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Tooltip />
                <Legend />
                <Pie
                  data={quantities}
                  dataKey="totalStockQuantity"
                  nameKey="category"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  label
                >
                  {quantities.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </section>
  );
};

export default Graph;
