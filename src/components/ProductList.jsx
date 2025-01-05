function ProductList({ products }) {
  return (
    <div>
      <h2 className="text-xl text-slate-300 text-bold mb-3">Products list</h2>
      {products.map((product) => (
        <div key={product.id} id="products-list">
          <div className="flex items-center justify-between mb-4">
            <span className="text-slate-400">{product.title}</span>
            <div className="flex items-center gap-x-3">
              <span className="text-slate-400">
                {new Date(product.createdAt).toLocaleDateString()}
              </span>
              <span className="block border border-slate-400 text-slate-400 rounded-2xl px-3 py-0.5">
                {product.categoryId}
              </span>
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-500 text-slate-300 border-2 border-slate-300 ">
                {product.quantity}
              </span>
              <button className="border border-red-400 text-red-400 rounded-2xl py-0.5 px-2">
                delete
              </button>
            </div>
          </div>
        </div>
      ))}

      <div className="h-20"></div>
    </div>
  );
}
export default ProductList;
