import React, { useState } from "react";

import AuthenticatedLayout from "../../layouts/AuthenticatedLayout";
const EditProfile: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Profile");

  const handleTabChange = (event: any) => {
    setActiveTab(event.target.value);
  };

  return (
    <>
      <AuthenticatedLayout pageTitle="Edit Profile" pageHeading="Edit Profile">
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select your country
          </label>
          <select
            id="tabs"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={activeTab}
            onChange={handleTabChange}
          >
            <option value="Profile">Profile</option>
            <option value="Security">Security</option>
          </select>
        </div>
        <ul className="hidden text-sm font-medium text-center text-gray-500 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
          <li className="w-full focus-within:z-10">
            <button
              className={`inline-block w-full p-4 ${
                activeTab === "Profile"
                  ? "text-gray-900 bg-gray-100 border-r border-gray-200 dark:border-gray-700 rounded-s-lg    dark:bg-gray-700 dark:text-white"
                  : "bg-white border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50     dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
              }`}
              onClick={() => setActiveTab("Profile")}
            >
              Profile
            </button>
          </li>
          <li className="w-full focus-within:z-10">
            <button
              className={`inline-block w-full p-4 ${
                activeTab === "Security"
                  ? "text-gray-900 bg-gray-100 border-r border-gray-200 dark:border-gray-700 rounded-s-lg     dark:bg-gray-700 dark:text-white"
                  : "bg-white border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50    dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
              }`}
              onClick={() => setActiveTab("Security")}
            >
              Security
            </button>
          </li>
        </ul>
        <div className="mt-4">
          {activeTab === "Profile" && (
            <>
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Profile Card */}
                <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center lg:w-1/3">
                  <div className="bg-blue-500 rounded-full w-24 h-24 flex items-center justify-center text-white text-4xl mb-4">
                    R
                  </div>
                  <h2 className="text-xl font-semibold mb-2">root Admin</h2>
                  <p className="text-gray-600 mb-4">Email: admin@root.com</p>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 6.707a1 1 0 01-1.414 0L10 1.414 4.707 6.707a1 1 0 01-1.414-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 010 1.414z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M4 10a1 1 0 011-1h10a1 1 0 011 1v8a1 1 0 11-2 0v-7H6v7a1 1 0 11-2 0v-8z"
                        clipRule="evenodd"
                      />
                    </svg>
                    UPLOAD
                  </button>
                </div>

                {/* Profile Details */}
                <div className="bg-white rounded-lg shadow-lg p-6 flex-1 lg:w-2/3">
                  <h2 className="text-xl font-semibold pb-4 mb-4">
                    Profile Details
                  </h2>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div className="relative">
                        <input
                          id="firstName"
                          name="firstName"
                          type="text"
                          autoComplete="off"
                          className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                          placeholder="First Name"
                          defaultValue="admin"
                        />
                        <label
                          htmlFor="firstName"
                          className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                        >
                          First Name
                        </label>
                      </div>
                      <div className="relative">
                        <input
                          id="lastName"
                          name="lastName"
                          type="text"
                          autoComplete="off"
                          className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                          placeholder="Last Name"
                          defaultValue="root"
                        />
                        <label
                          htmlFor="lastName"
                          className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                        >
                          Last Name
                        </label>
                      </div>
                      <div className="relative">
                        <input
                          id="phoneNumber"
                          name="phoneNumber"
                          type="text"
                          autoComplete="off"
                          className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                          placeholder="Phone Number"
                        />
                        <label
                          htmlFor="phoneNumber"
                          className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                        >
                          Phone Number
                        </label>
                      </div>

                      <div className="relative">
                        <input
                          id="email"
                          name="email"
                          type="text"
                          autoComplete="off"
                          className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                          placeholder="Email"
                          defaultValue="admin@root.com"
                        />
                        <label
                          htmlFor="email"
                          className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                        >
                          Email
                        </label>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 flex items-center"
                      >
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm4.707-11.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l5-5z"
                            clipRule="evenodd"
                          />
                        </svg>
                        SAVE CHANGES
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </>
          )}
          {activeTab === "Security" && (
            <>
              <div className="bg-white rounded-lg shadow-lg p-6 flex-1">
                <h2 className="text-xl font-semibold pb-4 mb-4">
                  Change Password
                </h2>
                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Old Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      New Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="confirm-password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Confirm password
                    </label>
                    <input
                      type="confirm-password"
                      name="confirm-password"
                      id="confirm-password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 flex items-center"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm4.707-11.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l5-5z"
                          clipRule="evenodd"
                        />
                      </svg>
                      SAVE CHANGES
                    </button>
                  </div>
                </form>
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Reset passwod
                </button>
              </div>
            </>
          )}
        </div>
      </AuthenticatedLayout>
    </>
  );
};

export default EditProfile;
