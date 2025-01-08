import { useNavigate, useParams } from "react-router-dom";
import { useData } from "../context/DataProvider";
import Navbar from "./Navbar";
import { IoMdArrowBack } from "react-icons/io";
import useMoveBack from "../hooks/useMoveBack";

function SingleProduct() {
  const { id } = useParams();
  const moveBack = useMoveBack();
  const { products, categories } = useData();
  const singleProduct = products.find((p) => p.id === +id);
  const date = new Date(singleProduct.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });
  const categoryTitle = categories.find(
    (c) => c.id === +singleProduct.categoryId
  ).title;


  return (
    <div className="bg-secondary-800 w-screen h-screen">
      <Navbar>
        <h1>Product Detail</h1>
      </Navbar>

      <div className="container mx-auto max-w-screen-md px-2">
        <button
          onClick={moveBack}
          className="bg-secondary-500 rounded-md text-secondary-200 mb-5 px-2 flex items-center"
        >
          <IoMdArrowBack className="w-4 h-4 mr-1" />
          <span>Back</span>
        </button>
        <div className="bg-secondary-700  flex flex-col gap-y-2 p-3 rounded-md">
          <div className="flex items-center border-2 border-secondary-800 rounded-md py-1 px-4 text-secondary-200">
            <p className="pr-4">Product Name :</p>
            <h2 className="bg-secondary-600 px-2 rounded-md">
              {singleProduct.title}
            </h2>
          </div>
          <div className="flex items-center border-2 border-secondary-800 rounded-md py-1 px-4 text-secondary-200">
            <p className="pr-4">Quantity : </p>
            <p className="bg-secondary-600 px-2 rounded-md">
              {singleProduct.quantity}
            </p>
          </div>
          <div className="flex items-center border-2 border-secondary-800 rounded-md py-1 px-4 text-secondary-200">
            <p className="pr-4">Category : </p>
            <p className="bg-secondary-600 px-2 rounded-md">{categoryTitle}</p>
          </div>
          <div className="flex items-center border-2 border-secondary-800 rounded-md py-1 px-4 text-secondary-200">
            <p className="pr-4">Created At : </p>
            <p className="bg-secondary-600 px-2 rounded-md">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SingleProduct;
