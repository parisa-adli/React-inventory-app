import { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext();

export default function DataProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const savedCategories =
      JSON.parse(localStorage.getItem("categories")) || [];
    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setCategories(savedCategories);
    setProducts(savedProducts);
  }, []);

  useEffect(() => {
    if (categories.length) {
      localStorage.setItem("categories", JSON.stringify(categories));
    }
  }, [categories]);

  useEffect(() => {
    if (products.length) {
      localStorage.setItem("products", JSON.stringify(products));
    }
  }, [products]);

  return (
    <DataContext.Provider
      value={{ categories, setCategories, products, setProducts }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (context === undefined)
    throw new Error("DataContext was used outside of DataProvider");
  return context;
}
