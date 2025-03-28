import React, { useState, useEffect } from "react";

const ProductForm = ({ addProduct, updateProduct, currentProduct, setCurrentProduct }) => {
  const [productDetails, setProductDetails] = useState({ id: "", name: "", type: "", specs: "" });

  useEffect(() => {
    if (currentProduct) {
      setProductDetails(currentProduct);
    } else {
      setProductDetails({ id: "", name: "", type: "", specs: "" });
    }
  }, [currentProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (productDetails.id) {
      updateProduct(productDetails);
    } else {
      addProduct({ ...productDetails, id: Date.now() });
    }
    setProductDetails({ id: "", name: "", type: "", specs: "" });
    setCurrentProduct(null);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Product Name"
        value={productDetails.name}
        onChange={(e) => setProductDetails({ ...productDetails, name: e.target.value })}
        className="border p-2 mr-2 rounded w-1/3"
        required
      />
      <input
        type="text"
        placeholder="Product Type (iPhone, Mac, etc.)"
        value={productDetails.type}
        onChange={(e) => setProductDetails({ ...productDetails, type: e.target.value })}
        className="border p-2 mr-2 rounded w-1/3"
        required
      />
      <textarea
        placeholder="Product Specifications"
        value={productDetails.specs}
        onChange={(e) => setProductDetails({ ...productDetails, specs: e.target.value })}
        className="border p-2 mr-2 rounded w-1/3"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {productDetails.id ? "Update Product" : "Add Product"}
      </button>
    </form>
  );
};

export default ProductForm;