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



import { useState } from "react";
import Paras from "./Paras";

const tabsData = [
  {
    label: "This Text",
    content:
      "Ut irure mollit nulla eiusmod excepteur laboris elit sit anim magna tempor excepteur labore nulla.",
  },
  {
    label: "That Text",
    content:
      "Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.",
  },
];

export function ProductList() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <>
    <Paras />
    <div>
      <img class="object-cover w-full h-96" src="https://akcdn.detik.net.id/community/media/visual/2021/12/25/shopee-1_169.png?w=700&q=90" />
    </div>
    <div>
      <div className="flex space-x-4 py-8">
        {/* Loop through tab data and render button for each. */}
        {tabsData.map((tab, idx) => {
          return (
            <button
              key={idx}
              className={`text-gray-500 hover:text-gray-900 ${
                idx === activeTabIndex
                  ? "text-gray-900"
                  : "text-gray-500 hover:text-gray-900"
              }`}
              // Change the active tab on click.
              onClick={() => setActiveTabIndex(idx)}>
              {tab.label}
            </button>
          );
        })}
      </div>
      {/* Show active tab content. */}
      <div className="py-0">
        <p>{tabsData[activeTabIndex].content}</p>
      </div>
    </div>
    </>
  );
}

export default ProductList;