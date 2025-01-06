import { createContext, useContext, useEffect, useState } from "react";
import { useData } from "./DataProvider";

const FilterContext = createContext();

export default function FilterProvider({ children }) {
  const { products, setProducts } = useData();
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

  const filterSelectedCategory = (array) => {
    if (!selectedCategory) return array;
    return array.filter((item) => item.categoryId === selectedCategory);
  };

  return (
    <FilterContext.Provider
      value={{
        sort,
        setSort,
        searchValue,
        setSearchValue,
        selectedCategory,
        setSelectedCategory,
        filteredProducts,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  const context = useContext(FilterContext);
  if (context === undefined)
    throw new Error("FilterContext was used outside of FilterProvider");
  return context;
}
