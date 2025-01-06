import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import CategoryForm from "./components/CategoryForm";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import Filter from "./components/Filter";
import { ThemeProvider } from "./context/ThemeProvider";
import DataProvider from "./context/DataProvider";
import FilterProvider from "./context/FilterProvider";

function App() {
  return (
    <DataProvider>
      <FilterProvider>
        <ThemeProvider>
          <div className="bg-secondary-800 min-h-screen">
            <Navbar />
            <div className="container max-w-screen-lg mx-auto px-3 grid grid-cols-1 md:grid-cols-2  gap-x-10">
              <div>
                <CategoryForm />
                <ProductForm />
              </div>
              <div>
                <Filter />
                <ProductList />
              </div>
            </div>
          </div>
        </ThemeProvider>
      </FilterProvider>
    </DataProvider>
  );
}

export default App;
