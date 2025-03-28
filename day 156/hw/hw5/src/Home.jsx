import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";
import ProductForm from "./ProductForm";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(null);

  // Load products from localStorage when the app starts
  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(savedProducts);
  }, []);

  // Save products to localStorage whenever the products list changes
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const updateProduct = (updatedProduct) => {
    setProducts(products.map((product) => (product.id === updatedProduct.id ? updatedProduct : product)));
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Apple Products</h1>
      <ProductForm
        addProduct={addProduct}
        updateProduct={updateProduct}
        currentProduct={currentProduct}
        setCurrentProduct={setCurrentProduct}
      />
      <ProductList
        products={products}
        deleteProduct={deleteProduct}
        setCurrentProduct={setCurrentProduct}
      />
    </div>
  );
};

export default Home;