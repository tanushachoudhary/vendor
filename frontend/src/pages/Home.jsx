import { useState } from "react";
import VendorForm from "../components/VendorForm";
import VendorList from "../components/VendorList";

function Home() {
  const [activeTab, setActiveTab] = useState("list"); // "list" or "form"
  const handleLogout = async () => {
    try {
      const res = await fetch("https://vendor-backend-2x0h.onrender.com/logout", {
        method: "GET",
        credentials: "include",
      });

      if (res.ok) {
        window.location.href = "/login"; // frontend handles redirect
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <div className="min-h-screen bg-orange-100 ">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-3xl font-bold text-gray-900">
              Vendor Management
            </h1>
            <button
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              onClick={handleLogout}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H3zm7 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm1 4a1 1 0 102 0V7a1 1 0 10-2 0v4z"
                  clipRule="evenodd"
                />
                <path d="M13 7a1 1 0 10-2 0v4a1 1 0 102 0V7z" />
              </svg>
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tab navigation */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            <button
              className={`${
                activeTab === "list"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              onClick={() => setActiveTab("list")}
            >
              View Vendors
            </button>
            <button
              className={`${
                activeTab === "form"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              onClick={() => setActiveTab("form")}
            >
              Add New Vendor
            </button>
          </nav>
        </div>

        {/* Conditional rendering based on active tab */}
        <div className="mt-6">
          {activeTab === "list" ? (
            <VendorList />
          ) : (
            <VendorForm onSuccess={() => setActiveTab("list")} />
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-500 border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-white">
            &copy; {new Date().getFullYear()} Vendor Management System. All
            rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
