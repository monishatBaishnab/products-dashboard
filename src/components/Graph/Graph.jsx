const Graph = () => {
  return (
    <section className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Stock Quantity by Category
      </h2>
      {/* Placeholder for Graph */}
      <div className="bg-gray-100 h-60 rounded-lg flex items-center justify-center text-gray-500">
        <p>Graph goes here...</p>
        {/* You can replace this with a Chart.js or Recharts graph */}
      </div>
    </section>
  );
};

export default Graph;
