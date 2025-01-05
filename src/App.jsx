import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import CategoryForm from "./components/CategoryForm";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import Filter from "./components/Filter";

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sort, setSort] = useState("latest");
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    let result = products;
    result = filteredSearchTitle(result);
    result = sortDate(result);
    setFilteredProducts(result);
  }, [products, sort, searchValue]);

  const searchHandler = (e) => {
    setSearchValue(e.target.value.trim().toLowerCase());
  };

  const sortHandler = (e) => {
    setSort(e.target.value);
  };

  const filteredSearchTitle = (array) => {
    return array.filter((p) => p.title.toLowerCase().includes(searchValue));
  };
  const sortDate = (array) => {
    let sortedProducts = [...array];
    return sortedProducts.sort((a, b) => {
      if (sort === "latest")
        return new Date(b.createdAt) - new Date(a.createdAt);
      else if (sort === "earliest")
        return new Date(a.createdAt) - new Date(b.createdAt);
    });
  };

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
    <div className="bg-slate-800 min-h-screen">
      <Navbar />
      <div className="container max-w-screen-sm mx-auto px-3">
        <CategoryForm setCategories={setCategories} />
        <ProductForm categories={categories} setProducts={setProducts} />
        <Filter
          sort={sort}
          searchValue={searchValue}
          onSort={sortHandler}
          onSearch={searchHandler}
        />
        <ProductList
          products={filteredProducts}
          setProducts={setProducts}
          categories={categories}
        />
      </div>
    </div>
  );
}

export default App;
