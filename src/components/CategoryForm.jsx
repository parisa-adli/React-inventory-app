import { useState } from "react";

function CategoryForm({ setCategories }) {
  const [isShow, setIsShow] = useState(false);
  const [categoryFormData, setCategoryFormData] = useState({
    title: "",
    description: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setCategoryFormData({ ...categoryFormData, [name]: value });
  };

  const addNewCategoryHandler = (e) => {
    e.preventDefault();
    const newCategory = {
      ...categoryFormData,
      createdAt: new Date().toISOString(),
      id: new Date().getTime(),
    };
    setCategories((prevCategories) => [...prevCategories, newCategory]);
    setCategoryFormData({ title: "", description: "" });
  };

  return (
    <div>
      <div className={`mb-6 ${!isShow && "hidden"}`} id="category-wrapper">
        <h2 className="text-xl text-slate-300 text-bold mb-3">
          Add New Category
        </h2>
        <form className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4 transition-all duration-300 ease-out">
          <div>
            <label
              htmlFor="category-title"
              className="text-slate-400 mb-1 block"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              value={categoryFormData.title}
              onChange={changeHandler}
              id="title"
              className="bg-transparent rounded-xl border border-slate-500 text-slate-400"
            />
          </div>
          <div>
            <label
              className="block mb-1 text-slate-400"
              htmlFor="category-desc"
            >
              description
            </label>
            <textarea
              name="description"
              value={categoryFormData.description}
              onChange={changeHandler}
              id="description"
              className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full"
            />
          </div>
          <div className="flex items-center justify-center gap-x-4">
            <button
              id="cancel-category"
              className="flex-1 border border-slate-400 text-slate-400 rounded-xl py-2"
              onClick={(e) => {
                e.preventDefault();
                setIsShow(false);
              }}
            >
              Cancel
            </button>
            <button
              id="add-new-category"
              className="flex-1 bg-slate-500 text-slate-200 rounded-xl py-2"
              onClick={addNewCategoryHandler}
            >
              Add
            </button>
          </div>
        </form>
      </div>
      <button
        id="toggle-add-category"
        className={`text-slate-600 text-lg font-medium mb-4 ${
          isShow && "hidden"
        }`}
        onClick={() => setIsShow((prev) => !prev)}
      >
        Add New Category?
      </button>
    </div>
  );
}
export default CategoryForm;
