import { useEffect, useState } from "react";
import axios from "axios";

function VendorList() {
  const [vendors, setVendors] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [deleteInProgress, setDeleteInProgress] = useState(null);

  const fetchVendors = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/vendors?page=${page}`);
      setVendors(res.data.vendors);
      
      // Assuming your API returns total pages info
      if (res.data.totalPages) {
        setTotalPages(res.data.totalPages);
      }
    } catch (error) {
      console.error("Error fetching vendors:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this vendor?")) {
      setDeleteInProgress(id);
      try {
        await axios.delete(`${import.meta.env.VITE_API_URL}/api/vendors/${id}`);
        fetchVendors();
      } catch (error) {
        console.error("Error deleting vendor:", error);
        alert("Failed to delete vendor. Please try again.");
      } finally {
        setDeleteInProgress(null);
      }
    }
  };

  useEffect(() => {
    fetchVendors();
  }, [page]);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-blue-200 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Vendor List</h2>
        <div className="flex space-x-2">
          <button 
            onClick={() => fetchVendors()} 
            className="p-2 text-blue-600 hover:text-blue-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center p-8">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : vendors.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          <p>No vendors found. Add your first vendor to get started.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">Vendor Name</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">Bank Account</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">Bank Name</th>
                <th className="py-3 px-4 text-right text-sm font-medium text-gray-700 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {vendors.map((vendor) => (
                <tr key={vendor._id} className="hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm text-gray-800">{vendor.vendorName}</td>
                  <td className="py-3 px-4 text-sm text-gray-800">{vendor.bankAccountNo}</td>
                  <td className="py-3 px-4 text-sm text-gray-800">{vendor.bankName}</td>
                  <td className="py-3 px-4 text-right">
                    <button
                      onClick={() => handleDelete(vendor._id)}
                      disabled={deleteInProgress === vendor._id}
                      className={`text-red-600 hover:text-red-800 px-2 py-1 rounded-md text-sm ${
                        deleteInProgress === vendor._id ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      {deleteInProgress === vendor._id ? (
                        <span className="flex items-center">
                          <svg className="animate-spin h-4 w-4 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Deleting...
                        </span>
                      ) : (
                        'Delete'
                      )}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="mt-6 flex items-center justify-center space-x-4">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page <= 1 || isLoading}
          className={`px-4 py-2 border rounded-md text-sm ${
            page <= 1 || isLoading
              ? 'text-gray-400 border-gray-300 cursor-not-allowed'
              : 'text-gray-700 border-gray-300 hover:bg-gray-50'
          }`}
        >
          Previous
        </button>
        <div className="text-sm text-gray-700">
          Page {page} of {totalPages}
        </div>
        <button
          onClick={() => setPage((p) => p + 1)}
          disabled={page >= totalPages || isLoading}
          className={`px-4 py-2 border rounded-md text-sm ${
            page >= totalPages || isLoading
              ? 'text-gray-400 border-gray-300 cursor-not-allowed'
              : 'text-gray-700 border-gray-300 hover:bg-gray-50'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default VendorList;