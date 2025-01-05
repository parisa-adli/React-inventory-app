function Navbar() {
  return (
    <div className="h-12 flex items-center justify-center gap-x-4 bg-slate-700 text-slate-300 font-bold mb-6">
      <h1>Inventory App using tailwind & js</h1>
      <span
        id="total-products"
        className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-500 text-slate-300 border-2 border-slate-400 font-bold"
      >
        7
      </span>
    </div>
  );
}
export default Navbar;
