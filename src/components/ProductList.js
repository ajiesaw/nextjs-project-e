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
import { useState } from "react";
import products from "../dummy/products.json"

const ProductList = () => {
  const tabsData =  ['All Products', "Men's Clothing", "Jewelery", "Electronics", "Women's Clothing"]
  const [tabs, setTabs] = useState(tabsData[0]);

  return (
    <>
    {/* Header dan Navbar */}
    <Paras />

    {/* Gambar */}
    <div>
      <img class="object-cover w-full h-96" src="https://akcdn.detik.net.id/community/media/visual/2021/12/25/shopee-1_169.png?w=700&q=90" alt="Cart" />
    </div>

    <div className="text-3xl font-bold py-10 text-center">
          New Arrivals
    </div>

    {/* Tabs */}
    <div className="flex flex-row justify-center space-x-4 md:space-x-8">
      {
        tabsData.map((tab) => (
          <div
            className="text-center cursor-pointer text-gray-900 peer focus:text-gray-500 hover:text-gray-500"
            onClick={()=>{
              setTabs(tab)
            }}>
              {tab}
          </div>
        ))
      }
    </div>

    {/* Product List */}
    <div>
        <div className="bg-white">
          <div className="mx-auto max-w-2xl py-16 lg:max-w-7xl px-4">
            <h2 className="sr-only">Products</h2>

            <div className="grid gap-y-10 gap-x-6 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                tabs === "All Products" ? (
                <a key={product.id} href={product.href} className="group">
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-white xl:aspect-w-7 xl:aspect-h-8">
                    <img
                      src={product.image}
                      alt={product.imageAlt}
                      className="h-72 w-72 object-contain object-center group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="truncate mt-4 text-sm text-gray-700">{product.title}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                </a>
              ) : null
              ))}

              {products.map((product) => (
                tabs === "Men's Clothing" && product.category === "men's clothing" ? (
                <a key={product.id} href={product.href} className="group">
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-white xl:aspect-w-7 xl:aspect-h-8">
                    <img
                      src={product.image}
                      alt={product.imageAlt}
                      className="h-72 w-72 object-contain object-center group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="truncate mt-4 text-sm text-gray-700">{product.title}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                </a>
                ) : null
              ))}

              {products.map((product) => (
                tabs === "Jewelery" && product.category === "jewelery" ? (
                <a key={product.id} href={product.href} className="group">
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-white xl:aspect-w-7 xl:aspect-h-8">
                    <img
                      src={product.image}
                      alt={product.imageAlt}
                      className="h-72 w-72 object-contain object-center group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="truncate mt-4 text-sm text-gray-700">{product.title}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                </a>
              ) : null
              ))}

              {products.map((product) => (
                tabs === "Electronics" && product.category === "electronics" ? (
                <a key={product.id} href={product.href} className="group">
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-white xl:aspect-w-7 xl:aspect-h-8">
                    <img
                      src={product.image}
                      alt={product.imageAlt}
                      className="h-72 w-72 object-contain object-center group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="truncate mt-4 text-sm text-gray-700">{product.title}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                </a>
              ) : null
              ))}

              {products.map((product) => (
                tabs === "Women's Clothing" && product.category === "women's clothing" ? (
                <a key={product.id} href={product.href} className="group">
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-white xl:aspect-w-7 xl:aspect-h-8">
                    <img
                      src={product.image}
                      alt={product.imageAlt}
                      className="h-72 w-72 object-contain object-center group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="truncate mt-4 text-sm text-gray-700">{product.title}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                </a>
              ) : null
              ))}
            </div>

          </div>
        </div>
    </div>
    </>
  );
}

export default ProductList;