import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import CategoryForm from "./components/CategoryForm";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import Filter from "./components/Filter";
import { ThemeProvider } from "./context/ThemeProvider";
import DataProvider from "./context/DataProvider";
import FilterProvider from "./context/FilterProvider";
import { Route, Routes, Outlet } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import SingleProduct from "./components/SingleProduct";

function App() {
  return (
    <DataProvider>
      <FilterProvider>
        <ThemeProvider>
          <Routes>
            <Route path="/" element={<AppLayout />} />
            <Route path=":id" element={<SingleProduct />} />
          </Routes>
        </ThemeProvider>
      </FilterProvider>
    </DataProvider>
  );
}

export default App;
