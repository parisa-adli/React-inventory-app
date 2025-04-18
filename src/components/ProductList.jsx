import { Link } from "react-router-dom";
import { useData } from "../context/DataProvider";
import { useFilter } from "../context/FilterProvider";
import { FiEdit } from "react-icons/fi";
import { useState } from "react";
import ProductForm from "./ProductForm";

function ProductList() {
  const { setProducts, categories, editProduct } = useData();
  const { filteredProducts } = useFilter();
  const [editObj, setEditObj] = useState(null);

  const deleteProduct = (productId) => {
    const filtersProducts = filteredProducts.filter(
      (product) => +product.id !== +productId
    );
    setProducts(filtersProducts);
  };

  return (
    <div>
      <div className="border-b border-secondary-400 text-secondary-300 text-lg font-bold pb-0.5 mt-8 mb-4">
        Product List
      </div>
      <div className="overflow-x-auto">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            id="products-list"
            className="flex items-center justify-between mb-2 w-full min-w-[400px]"
          >
            <Link to={`${product.id}`}>
              <span className="text-secondary-400">{product.title}</span>
            </Link>
            <div className="flex items-center gap-x-3">
              <span className="text-secondary-400">
                {new Date(product.createdAt).toLocaleDateString("en-GB", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
              <span className="block min-w-24 text-center border border-secondary-400 text-secondary-400 rounded-2xl px-3 py-0.5">
                {
                  categories.find(
                    (category) => +category.id === +product.categoryId
                  ).title
                }
              </span>
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-secondary-500 text-secondary-200 border-2 border-secondary-200 ">
                {product.quantity}
              </span>
              <button
                className="border border-secondary-400 text-secondary-400 rounded-full  p-1.5"
                onClick={() => editProduct(product.id)}
              >
                <FiEdit />
              </button>
              <button
                className="border border-red-400 text-red-400 rounded-2xl py-0.5 px-2"
                onClick={() => deleteProduct(product.id)}
              >
                delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="h-20"></div>
    </div>
  );
}
export default ProductList;
