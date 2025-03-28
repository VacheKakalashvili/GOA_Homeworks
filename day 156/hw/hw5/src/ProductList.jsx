import React from "react";

const ProductList = ({ products, deleteProduct, setCurrentProduct }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Our Apple Products</h2>
      {products.length > 0 ? (
        <ul className="space-y-4">
          {products.map((product) => (
            <li key={product.id} className="flex justify-between items-center border p-2 rounded">
              <div>
                <p className="font-semibold">{product.name}</p>
                <p className="text-sm text-gray-600">Type: {product.type}</p>
                <p className="text-sm text-gray-600">Specifications: {product.specs}</p>
              </div>
              <div>
                <button
                  onClick={() => setCurrentProduct(product)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded mr-2 hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteProduct(product.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No Apple products available yet!</p>
      )}
    </div>
  );
};

export default ProductList;
