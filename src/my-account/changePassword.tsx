// src/my-account/ChangePassword.tsx
import React from "react";

const ChangePassword: React.FC = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <form className="w-1/3 bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl mb-4">Change Password</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Current Password</label>
          <input
            type="password"
            className="w-full p-2 border border-gray-300 rounded mt-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">New Password</label>
          <input
            type="password"
            className="w-full p-2 border border-gray-300 rounded mt-2"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Change Password
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
