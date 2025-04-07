const DataTable = () => {
  return (
    <section className="bg-white shadow rounded-lg p-6 mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Product List</h2>
      <table className="min-w-full table-auto">
        <thead className="bg-gray-200 text-gray-700">
          <tr>
            <th className="px-4 py-2 text-left">Category</th>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Product Code</th>
            <th className="px-4 py-2 text-left">Price</th>
            <th className="px-4 py-2 text-left">Stock Quantity</th>
            <th className="px-4 py-2 text-left">Date Added</th>
          </tr>
        </thead>
        <tbody className="text-gray-600">
          <tr className="border-b">
            <td className="px-4 py-2">Electronics</td>
            <td className="px-4 py-2">Smartphone</td>
            <td className="px-4 py-2">SP-12345</td>
            <td className="px-4 py-2">$499.99</td>
            <td className="px-4 py-2">150</td>
            <td className="px-4 py-2">2025-04-07</td>
          </tr>
          {/* Additional rows */}
        </tbody>
      </table>
    </section>
  );
};

export default DataTable;
