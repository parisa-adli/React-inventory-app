import { Outlet } from "react-router-dom";
import CategoryForm from "./CategoryForm";
import Filter from "./Filter";
import Navbar from "./Navbar";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";
import { useData } from "../context/DataProvider";

function AppLayout() {
  const { products } = useData();
  return (
    <div className="bg-secondary-800 min-h-screen">
      <Navbar>
        <h1>Inventory App - Products</h1>
        <span
          id="total-products"
          className="flex items-center justify-center w-7 h-7 rounded-full bg-secondary-500 text-secondary-200 border-2 border-secondary-200 font-bold"
        >
          {products.length}
        </span>
      </Navbar>
      <div className="container max-w-screen-xl mx-auto px-3 grid grid-cols-1 md:grid-cols-2  gap-x-10">
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
  );
}
export default AppLayout;
