import { Users, ShoppingCart, DollarSign } from "lucide-react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function App() {

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Revenue",
        data: [1200, 1900, 3000, 2500, 3200],
        backgroundColor: "#6366f1"
      }
    ]
  };

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}

      <aside className="w-64 bg-indigo-700 text-white p-6">

        <h2 className="text-2xl font-bold mb-10">Admin Panel</h2>

        <ul className="space-y-4">
          <li className="cursor-pointer hover:text-gray-200">Dashboard</li>
          <li className="cursor-pointer hover:text-gray-200">Users</li>
          <li className="cursor-pointer hover:text-gray-200">Analytics</li>
          <li className="cursor-pointer hover:text-gray-200">Settings</li>
        </ul>

      </aside>

      {/* Main */}

      <main className="flex-1 p-10">

        {/* Topbar */}

        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded">
            New Report
          </button>
        </div>

        {/* Cards */}

        <div className="grid grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-xl shadow flex items-center justify-between">
            <div>
              <h3 className="text-gray-500">Users</h3>
              <p className="text-2xl font-bold">1,240</p>
            </div>
            <Users className="text-indigo-600" />
          </div>

          <div className="bg-white p-6 rounded-xl shadow flex items-center justify-between">
            <div>
              <h3 className="text-gray-500">Orders</h3>
              <p className="text-2xl font-bold">530</p>
            </div>
            <ShoppingCart className="text-indigo-600" />
          </div>

          <div className="bg-white p-6 rounded-xl shadow flex items-center justify-between">
            <div>
              <h3 className="text-gray-500">Revenue</h3>
              <p className="text-2xl font-bold">$12,400</p>
            </div>
            <DollarSign className="text-indigo-600" />
          </div>

        </div>

        {/* Chart */}

        <div className="mt-10 bg-white p-6 rounded-xl shadow">

          <h2 className="text-xl font-bold mb-4">Revenue Analytics</h2>

          <Bar data={data} />

        </div>

      </main>

    </div>
  );
}

export default App;