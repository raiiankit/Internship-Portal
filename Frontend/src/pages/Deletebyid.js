import React from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Deletebyid = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  // Function to handle the form submission and delete user by ID
  const deleteUserById = async (data) => {
    const { userid } = data; // Extract the user ID from form data

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/deleteuser/${userid}`, // Use the correct URL format
        {
          method: 'DELETE',
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('DELETE RESPONSE:', result);
      toast.success("Deleted Successfully!");
      navigate("/");

    } catch (error) {
      console.error('Error in deleteUserById:', error);
      toast.error(`Error: ${error.message}`);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-900">Delete User Details</h2>
        <form onSubmit={handleSubmit(deleteUserById)} className="space-y-6">
          <div>
            <label htmlFor="userId" className="block text-sm font-medium text-gray-700">
              User ID
            </label>
            <input
              type="text"
              {...register("userid", { required: true })} // Register the input with react-hook-form
              id="userId"
              className="w-full px-3 py-2 mt-1 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter user ID"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Delete User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Deletebyid;
