import React from "react";

const AppList = ({ apps, deleteApp, setCurrentApp }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Available Apps</h2>
      {apps.length > 0 ? (
        <ul className="space-y-4">
          {apps.map((app) => (
            <li key={app.id} className="flex justify-between items-center border p-2 rounded">
              <div>
                <p className="font-semibold">{app.name}</p>
                <p className="text-sm text-gray-600">Category: {app.category}</p>
                <p className="text-sm text-gray-600">{app.description}</p>
              </div>
              <div>
                <button
                  onClick={() => setCurrentApp(app)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded mr-2 hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteApp(app.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No apps available yet!</p>
      )}
    </div>
  );
};

export default AppList;