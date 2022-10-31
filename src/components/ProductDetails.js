import { Link, useParams } from "react-router-dom";
import Paras from "./Paras";
import products from "../dummy/products.json"

const ProductDetails = () => {
  const { productId } = useParams();

  return (
    <>
    <Paras />
    
    {/* Breadcrumbs */}
    <div className="flex flex-row px-2 py-4 space-x-2 items-center">
      <div className="cursor-pointer text-gray-900 hover:text-gray-500">
        <Link to="/">
          Home
        </Link>
      </div>
      <div className="cursor-default">
        /
      </div>
      <div>
        Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
      </div>
    </div>

    <div>
      <p>
        This is the <b>{productId}</b> details
      </p>
      <Link to="/" className="underline">
        Back to List
      </Link>
    </div>
    </>
  );
};

export default ProductDetails;
