import { useState } from "react";

function ProductForm({ categories, setProducts }) {
  const [productFormData, setProductFormData] = useState({
    title: "",
    quantity: "",
    categoryId: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProductFormData({ ...productFormData, [name]: value });
  };

  const addNewProduct = (e) => {
    e.preventDefault();
    const newProduct = {
      ...productFormData,
      createdAt: new Date().toISOString(),
      id: new Date().getTime(),
    };
    setProducts((prevProducts) => [...prevProducts, newProduct]);
    setProductFormData({ title: "", quantity: "", categoryId: "" });
  };
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl text-slate-300 text-bold mb-3">
          Add New Product
        </h2>
        <form className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4">
          <div>
            <label
              htmlFor="product-title"
              className="text-slate-400 mb-1 block"
            >
              Product title
            </label>
            <input
              type="text"
              name="title"
              value={productFormData.title}
              onChange={changeHandler}
              id="title"
              placeholder="product-title..."
              className="bg-transparent rounded-xl border border-slate-500 text-slate-400"
            />
          </div>
          <div>
            <label
              htmlFor="product-quantity"
              className="text-slate-400 mb-1 block"
            >
              Quantity
            </label>
            <input
              type="number"
              name="quantity"
              value={productFormData.quantity}
              onChange={changeHandler}
              id="quantity"
              placeholder="quantity..."
              className="bg-transparent rounded-xl border border-slate-500 text-slate-400"
            />
          </div>
          <div>
            <label
              htmlFor="product-category"
              className="text-slate-400 mb-1 block"
            >
              Quantity
            </label>
            <select
              name="categoryId"
              value={productFormData.categoryId}
              onChange={changeHandler}
              id="category"
              className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full"
            >
              <option className="bg-slate-500 text-slate-300" value="">
                select a category
              </option>
              {categories.map((category) => (
                <option
                  key={category.id}
                  className="bg-slate-500 text-slate-300"
                  value={category.id}
                >
                  {category.title}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center justify-center">
            <button
              id="add-new-product"
              className="flex-1 bg-slate-500 text-slate-200 rounded-xl py-2 "
              onClick={addNewProduct}
            >
              Add New Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default ProductForm;
