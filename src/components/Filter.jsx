import { useState } from "react";
import { useFilter } from "../context/FilterProvider";
import { useData } from "../context/DataProvider";

function Filter() {
  const {
    sort,
    setSort,
    searchValue,
    setSearchValue,
    selectedCategory,
    setSelectedCategory,
  } = useFilter();

  const { categories } = useData();

  return (
    <div>
      <div className="border-b border-secondary-400 text-secondary-400 font-bold pb-0.5 mb-4">
        Filters
      </div>
      <div className="flex items-center justify-between mb-4">
        <label htmlFor="search" className="text-secondary-400 text-lg">
          search
        </label>
        <input
          type="text"
          name="search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value.trim().toLowerCase())}
          id="search"
          className="bg-transparent rounded-xl border border-secondary-500 text-secondary-400"
        />
      </div>
      <div className="flex items-center justify-between mb-4">
        <label htmlFor="sort-products" className="text-secondary-400 text-lg">
          sort
        </label>
        <select
          name="sort-products"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          id="sort-products"
          className="bg-transparent min-w-40 rounded-xl border border-secondary-500 text-secondary-400"
        >
          <option
            className="bg-secondary-500 text-secondary-200"
            value="latest"
          >
            latest
          </option>
          <option
            className="bg-secondary-500 text-secondary-200"
            value="earliest"
          >
            earliest
          </option>
        </select>
      </div>
      <div className="flex items-center justify-between mb-4">
        <label htmlFor="sort-products" className="text-secondary-400 text-lg">
          category
        </label>
        <select
          name="sort-products"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          id="sort-products"
          className="bg-transparent min-w-30 rounded-xl border border-secondary-500 text-secondary-400"
        >
          <option className="bg-secondary-500 text-secondary-200" value="">
            all
          </option>
          {categories.map((category) => (
            <option
              className="bg-secondary-500 text-secondary-200"
              value={category.id}
              key={category.id}
            >
              {category.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
export default Filter;
