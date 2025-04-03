import React, { useState } from "react";
// import { createWorkSpace } from "@/service/workSpaceService";

const FormCreateWorkspace = () => {
  const [workspaceName, setWorkspaceName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setError(null);
  //   setSuccess(false);

  //   try {
  //     if (!workspaceName.trim()) {
  //       setError("Workspace name cannot be empty.");
  //       return;
  //     }

  //     const data = await createWorkSpace(workspaceName);
  //     console.log("Workspace created successfully:", data);
  //     setSuccess(true);
  //     setWorkspaceName(""); // Clear input after success
  //   } catch (err) {
  //     console.error("Error creating workspace:", err);
  //     setError(err.message || "An error occurred while creating the workspace.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <main>
      <div className="space-y-6 w-full max-w-sm mx-auto bg-white p-8 rounded-3xl relative">
        <h1 className="font-bold text-3xl text-center mb-6 text-gray-800">
          Create Workspace
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Workspace Name
            </label>
            <input
              id="workspaceName"
              type="text"
              value={workspaceName}
              onChange={(e) => setWorkspaceName(e.target.value)}
              placeholder="Enter workspace name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && (
            <p className="text-green-500 text-sm">
              Workspace created successfully!
            </p>
          )}
          <button
            type="submit"
            className={`w-full ${loading ? "bg-gray-400" : "bg-red-500"} text-white py-3 rounded-lg font-bold hover:bg-red-600 transition shadow-sm`}
            disabled={loading}
          >
            {loading ? "Creating..." : "Create"}
          </button>
        </form>

        <div className="text-center mt-6 text-gray-500 text-sm space-y-1">
          <p>&copy; 2025 Monster</p>
        </div>
      </div>
    </main>
  );
};

export default FormCreateWorkspace;