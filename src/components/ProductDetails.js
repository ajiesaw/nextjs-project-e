import { Link, /*useParams*/ } from "react-router-dom";
import Paras from "./Paras";

const product = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  rating: {
    rate: 3.9,
    count: 120
  }
}

const ProductDetails = () => {
//  const { productId } = useParams();

  return (
    <>
    <Paras />
    
    {/* Breadcrumbs */}
    <div className="flex flex-row px-2 py-4 space-x-2 items-center">
      <div className="cursor-pointer text-gray-900 hover:text-gray-600">
        <Link to="/">
          Home
        </Link>
      </div>
      <div className="cursor-default">
        /
      </div>
      <div className="cursor-pointer capitalize text-gray-900 hover:text-gray-600">
        {product.category}
      </div>
      <div className="cursor-default">
        /
      </div>
      <div className="font-medium">
        {product.title}
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 px-2 py-4">
      {/* Gambar */}
      <div className="flex justify-center">
        <img
          src={product.image}
          className="w-1/2 py-2"
        />
      </div>

      {/* Deskripsi */}
      <div>
        <div className="border-b-2 py-2">
          <div className="text-2xl font-medium py-2">
            {product.title}
          </div>
          <div className="text-xl py-2">
            $ {product.price}
          </div>
          <div class="flex items-center py-2">
            <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <p class="ml-2 text-sm font-medium text-gray-900">{product.rating.rate}</p>
            <p className="px-2">|</p>
            <p class="text-sm font-medium text-gray-900">{product.rating.count} Reviews</p>
          </div>
          <div className="py-2">
            <p>
              {product.description}
            </p>
          </div>
        </div>
      </div>

    </div>

{/*    <div>
      <p>
        This is the <b>{productId}</b> details
      </p>
      <Link to="/" className="underline">
        Back to List
      </Link>
  </div>*/}
    </>
  );
};

export default ProductDetails;
