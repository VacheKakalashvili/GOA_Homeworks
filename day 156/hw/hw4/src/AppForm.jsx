import React, { useState, useEffect } from "react";

const AppForm = ({ addApp, updateApp, currentApp, setCurrentApp }) => {
  const [appDetails, setAppDetails] = useState({ id: "", name: "", category: "", description: "" });

  useEffect(() => {
    if (currentApp) {
      setAppDetails(currentApp);
    } else {
      setAppDetails({ id: "", name: "", category: "", description: "" });
    }
  }, [currentApp]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (appDetails.id) {
      updateApp(appDetails);
    } else {
      addApp({ ...appDetails, id: Date.now() });
    }
    setAppDetails({ id: "", name: "", category: "", description: "" });
    setCurrentApp(null);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="App Name"
        value={appDetails.name}
        onChange={(e) => setAppDetails({ ...appDetails, name: e.target.value })}
        className="border p-2 mr-2 rounded w-1/3"
        required
      />
      <input
        type="text"
        placeholder="Category"
        value={appDetails.category}
        onChange={(e) => setAppDetails({ ...appDetails, category: e.target.value })}
        className="border p-2 mr-2 rounded w-1/3"
        required
      />
      <textarea
        placeholder="App Description"
        value={appDetails.description}
        onChange={(e) => setAppDetails({ ...appDetails, description: e.target.value })}
        className="border p-2 mr-2 rounded w-1/3"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {appDetails.id ? "Update App" : "Add App"}
      </button>
    </form>
  );
};

export default AppForm;