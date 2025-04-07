import { LogOut } from "lucide-react";
import React from "react";
import DataTable from "./components/DataTable/DataTable";
import Graph from "./components/Graph/Graph";

const App = () => {
  return (
    <div className="bg-gray-50">
      {/* Header */}
      <header className="max-w-screen-xl mx-auto px-6 pt-5">
        <div className="flex items-center justify-between px-6 py-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 rounded-lg shadow-lg text-white">
          <h1 className="text-2xl font-semibold">Product's Dashboard</h1>
          <button className="flex items-center space-x-2 bg-white text-indigo-600 hover:bg-gray-100 px-4 py-2 rounded-md transition duration-200">
            <LogOut className="text-lg" />
            <span>Logout</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6 max-w-screen-xl mx-auto">
        {/* Data Table Section */}
        <DataTable />

        {/* Graph Section */}
        <Graph />
      </main>
    </div>
  );
};

export default App;
