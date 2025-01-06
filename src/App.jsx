import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import CategoryForm from "./components/CategoryForm";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import Filter from "./components/Filter";
import { ThemeProvider } from "./context/ThemeProvider";

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sort, setSort] = useState("latest");
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    let result = products;
    result = filteredSearchTitle(result);
    result = filterSelectedCategory(result);
    result = sortDate(result);
    setFilteredProducts(result);
  }, [products, sort, searchValue, selectedCategory]);

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
  const selectCategoryHandler = (e) => {
    setSelectedCategory(e.target.value);
  };
  const filterSelectedCategory = (array) => {
    if (!selectedCategory) return array;
    return array.filter((item) => item.categoryId === selectedCategory);
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
    <ThemeProvider>
      <div className="bg-secondary-800 min-h-screen">
        <Navbar products={products} />
        <div className="container max-w-screen-lg mx-auto px-3 grid grid-cols-1 md:grid-cols-2  gap-x-10">
          <div>
            <CategoryForm setCategories={setCategories} />
            <ProductForm categories={categories} setProducts={setProducts} />
          </div>
          <div>
            <div className="border-b border-secondary-400 text-secondary-400 font-bold pb-0.5 mb-4">
              Filters
            </div>
            <Filter
              sort={sort}
              searchValue={searchValue}
              onSort={sortHandler}
              onSearch={searchHandler}
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={selectCategoryHandler}
            />
            <div className="border-b border-secondary-400 text-secondary-300 text-lg font-bold pb-0.5 mt-8 mb-4">
              Product List
            </div>

            <ProductList
              products={filteredProducts}
              setProducts={setProducts}
              categories={categories}
            />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
