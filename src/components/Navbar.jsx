import ThemeModeToggle from "./ThemeModeToggle";

function Navbar({ products }) {
  return (
    <div className="h-12 flex items-center justify-center gap-x-3 bg-secondary-600 text-secondary-200 font-bold mb-6">
      <ThemeModeToggle />
      <h1>Inventory App - Products</h1>
      <span
        id="total-products"
        className="flex items-center justify-center w-7 h-7 rounded-full bg-secondary-500 text-secondary-200 border-2 border-secondary-200 font-bold"
      >
        {products.length}
      </span>
    </div>
  );
}
export default Navbar;
