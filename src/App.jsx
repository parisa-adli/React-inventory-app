import { useState } from "react";
import Navbar from "./components/Navbar";
import CategoryForm from "./components/CategoryForm";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  return (
    <div className="bg-slate-800 min-h-screen">
      <Navbar />
      <div className="container max-w-screen-sm mx-auto px-3">
        <CategoryForm setCategories={setCategories} />
        <ProductForm categories={categories} setProducts={setProducts} />
        <ProductList
          products={products}
          setProducts={setProducts}
          categories={categories}
        />
      </div>
    </div>
  );
}

export default App;
