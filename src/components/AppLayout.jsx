import { Outlet } from "react-router-dom";
import CategoryForm from "./CategoryForm";
import Filter from "./Filter";
import Navbar from "./Navbar";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";

function AppLayout() {
  return (
    <div className="bg-secondary-800 min-h-screen">
      <Navbar />
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
