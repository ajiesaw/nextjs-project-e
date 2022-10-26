/*import { Link } from "react-router-dom";
import Paras from "./Paras";

const ProductList = () => {
  return (
    <>
      <Paras />
      <div>
        <img class="object-cover w-full h-96" src="https://akcdn.detik.net.id/community/media/visual/2021/12/25/shopee-1_169.png?w=700&q=90" />
      </div>
      <div className="mt-4">
        <p>This is the List of Product</p>
        <Link key={1} to={`/products/1`} className="link">
          <p className="underline">Go to Product 1</p>
        </Link>
      </div>
    </>
  );
};

export default ProductList;*/



import Paras from "./Paras";

export function ProductList() {
  return (
    <>
    {/*Header dan Navbar*/}
    <Paras />

    {/*Gambar*/}
    <div>
      <img class="object-cover w-full h-96" src="https://akcdn.detik.net.id/community/media/visual/2021/12/25/shopee-1_169.png?w=700&q=90" />
    </div>
    </>
  );
}

export default ProductList;