import { useState } from "react";

function Filter({
  sort,
  searchValue,
  onSort,
  onSearch,
  categories,
  selectedCategory,
  onSelectCategory,
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <label htmlFor="search" className="text-secondary-400 text-lg">
          search
        </label>
        <input
          type="text"
          name="search"
          value={searchValue}
          onChange={onSearch}
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
          onChange={onSort}
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
          onChange={onSelectCategory}
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
