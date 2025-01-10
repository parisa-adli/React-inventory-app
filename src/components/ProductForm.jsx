import { useEffect, useState } from "react";
import { useData } from "../context/DataProvider";

function ProductForm() {
  const { categories, setProducts, editObj, saveEdited } = useData();
  const [productFormData, setProductFormData] = useState({
    title: "",
    quantity: "",
    categoryId: "",
  });
  const { id: editId } = editObj || {};
  const isEditSession = Boolean(editId);

  useEffect(() => {
    if (isEditSession) {
      setProductFormData(editObj);
    }
  }, [editObj]);

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
    if (isEditSession) {
      saveEdited(productFormData);
    } else {
      setProducts((prevProducts) => [...prevProducts, newProduct]);
    }
    setProductFormData({ title: "", quantity: "", categoryId: "" });
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl text-secondary-300 text-bold mb-3">
          Add New Product
        </h2>
        <form className="bg-secondary-700 p-4 rounded-xl flex flex-col gap-y-4">
          <div>
            <label
              htmlFor="product-title"
              className="text-secondary-400 mb-1 block"
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
              className="bg-transparent rounded-xl border border-secondary-500 text-secondary-400"
            />
          </div>
          <div>
            <label
              htmlFor="product-quantity"
              className="text-secondary-400 mb-1 block"
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
              className="bg-transparent rounded-xl border border-secondary-500 text-secondary-400"
            />
          </div>
          <div>
            <label
              htmlFor="product-category"
              className="text-secondary-400 mb-1 block"
            >
              Quantity
            </label>
            <select
              name="categoryId"
              value={productFormData.categoryId}
              onChange={changeHandler}
              id="category"
              className="bg-transparent rounded-xl border border-secondary-500 text-secondary-400 w-full"
            >
              <option className="bg-secondary-500 text-secondary-200" value="">
                select a category
              </option>
              {categories.map((category) => (
                <option
                  key={category.id}
                  className="bg-secondary-500 text-secondary-200"
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
              className="flex-1 bg-secondary-500 text-secondary-200 rounded-xl py-2 "
              disabled={
                !productFormData.title ||
                !productFormData.quantity ||
                !productFormData.categoryId
              }
              onClick={addNewProduct}
            >
              {isEditSession ? "Edit Product" : "Add New Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default ProductForm;
