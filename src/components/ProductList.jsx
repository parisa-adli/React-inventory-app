function ProductList({ products, setProducts, categories }) {
  const deleteProduct = (productId) => {
    const filteredProducts = products.filter(
      (product) => +product.id !== +productId
    );
    setProducts(filteredProducts);
  };

  return (
    <div>
      <div className="overflow-x-auto">
        {products.map((product) => (
          <div
            key={product.id}
            id="products-list"
            className="flex items-center justify-between mb-2 w-full min-w-[400px]"
          >
            <span className="text-slate-400">{product.title}</span>
            <div className="flex items-center gap-x-3">
              <span className="text-slate-400">
                {new Date(product.createdAt).toLocaleDateString("en-GB", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
              <span className="block min-w-24 text-center border border-slate-400 text-slate-400 rounded-2xl px-3 py-0.5">
                {
                  categories.find(
                    (category) => +category.id === +product.categoryId
                  ).title
                }
              </span>
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-500 text-slate-300 border-2 border-slate-300 ">
                {product.quantity}
              </span>
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
