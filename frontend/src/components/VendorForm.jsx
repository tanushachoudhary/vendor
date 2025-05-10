import { useState } from "react";
import axios from "axios";

function VendorForm() {
  const [form, setForm] = useState({
    vendorName: "", 
    bankAccountNo: "", 
    bankName: "",
    addressLine1: "", 
    addressLine2: "", 
    city: "", 
    country: "", 
    zipCode: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  
  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/vendors`, form);
      setSuccessMessage("Vendor added successfully!");
      setForm({
        vendorName: "", 
        bankAccountNo: "", 
        bankName: "",
        addressLine1: "", 
        addressLine2: "", 
        city: "", 
        country: "", 
        zipCode: ""
      });
      
      // Clear success message after 3 seconds
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      console.error("Error adding vendor:", error);
      alert("Failed to add vendor. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="max-w-2xl mx-auto p-6 bg-blue-200 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Vendor</h2>
      
      {successMessage && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md">
          {successMessage}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Vendor Details Section */}
          <div className="col-span-full">
            <h3 className="text-lg font-medium text-gray-700 mb-2">Vendor Details</h3>
            <div className="h-px bg-gray-200 mb-4"></div>
          </div>
          
          <div>
            <label htmlFor="vendorName" className="block text-sm font-medium text-gray-700 mb-1">
              Vendor Name*
            </label>
            <input
              id="vendorName"
              name="vendorName"
              value={form.vendorName}
              required
              placeholder="Enter vendor name"
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          {/* Banking Details Section */}
          <div className="col-span-full mt-2">
            <h3 className="text-lg font-medium text-gray-700 mb-2">Banking Details</h3>
            <div className="h-px bg-gray-200 mb-4"></div>
          </div>
          
          <div>
            <label htmlFor="bankName" className="block text-sm font-medium text-gray-700 mb-1">
              Bank Name*
            </label>
            <input
              id="bankName"
              name="bankName"
              value={form.bankName}
              required
              placeholder="Enter bank name"
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label htmlFor="bankAccountNo" className="block text-sm font-medium text-gray-700 mb-1">
              Bank Account No*
            </label>
            <input
              id="bankAccountNo"
              name="bankAccountNo"
              value={form.bankAccountNo}
              required
              placeholder="Enter account number"
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          {/* Address Section */}
          <div className="col-span-full mt-2">
            <h3 className="text-lg font-medium text-gray-700 mb-2">Address</h3>
            <div className="h-px bg-gray-200 mb-4"></div>
          </div>
          
          <div className="col-span-full">
            <label htmlFor="addressLine1" className="block text-sm font-medium text-gray-700 mb-1">
              Address Line 1
            </label>
            <input
              id="addressLine1"
              name="addressLine1"
              value={form.addressLine1}
              placeholder="Enter street address"
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div className="col-span-full">
            <label htmlFor="addressLine2" className="block text-sm font-medium text-gray-700 mb-1">
              Address Line 2
            </label>
            <input
              id="addressLine2"
              name="addressLine2"
              value={form.addressLine2}
              placeholder="Apartment, suite, unit, etc. (optional)"
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
              City
            </label>
            <input
              id="city"
              name="city"
              value={form.city}
              placeholder="Enter city"
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
              Country
            </label>
            <input
              id="country"
              name="country"
              value={form.country}
              placeholder="Enter country"
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
              Zip/Postal Code
            </label>
            <input
              id="zipCode"
              name="zipCode"
              value={form.zipCode}
              placeholder="Enter zip/postal code"
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        
        <div className="flex justify-end mt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Adding..." : "Add Vendor"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default VendorForm;