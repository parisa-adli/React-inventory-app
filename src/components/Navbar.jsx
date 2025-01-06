function Navbar({ products }) {
  return (
    <div className="h-12 flex items-center justify-center gap-x-3 bg-slate-700 text-slate-300 font-bold mb-6">
      <h1>Inventory App - Products</h1>
      <span
        id="total-products"
        className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-500 text-slate-300 border-2 border-slate-400 font-bold"
      >
        {products.length}
      </span>
    </div>
  );
}
export default Navbar;
