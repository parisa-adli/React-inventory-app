import { useParams } from "react-router-dom";

function SingleProduct() {
  const { id } = useParams();
  return (
    <div>
      <p>SingleProduct</p>
      <p>id: {id}</p>
    </div>
  );
}
export default SingleProduct;
