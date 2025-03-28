import React, { useState, useEffect } from "react";
import AppList from "./AppList";
import AppForm from "./AppForm";

const Home = () => {
  const [apps, setApps] = useState([]);
  const [currentApp, setCurrentApp] = useState(null);

  // Load apps from localStorage when the app starts
  useEffect(() => {
    const savedApps = JSON.parse(localStorage.getItem("apps")) || [];
    setApps(savedApps);
  }, []);

  // Save apps to localStorage whenever the apps list changes
  useEffect(() => {
    localStorage.setItem("apps", JSON.stringify(apps));
  }, [apps]);

  const addApp = (app) => {
    setApps([...apps, app]);
  };

  const updateApp = (updatedApp) => {
    setApps(apps.map((app) => (app.id === updatedApp.id ? updatedApp : app)));
  };

  const deleteApp = (id) => {
    setApps(apps.filter((app) => app.id !== id));
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Samsung App Store</h1>
      <AppForm
        addApp={addApp}
        updateApp={updateApp}
        currentApp={currentApp}
        setCurrentApp={setCurrentApp}
      />
      <AppList
        apps={apps}
        deleteApp={deleteApp}
        setCurrentApp={setCurrentApp}
      />
    </div>
  );
};

export default Home;
