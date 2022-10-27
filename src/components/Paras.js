const Paras = () => {
  return (
    <>
    <div className="">

      {/*Header*/}
      <div className="flex flex-row justify-between border-b-2 pb-2">
        <div className="flex flex-row divide-x">
          {/*<div className="pr-2">
            <select className="appearance-none">
              <option>English</option>
              <option>Indonesian</option>
            </select>
          </div>
          <div className="px-2">
            <select>
              <option>USD</option>
              <option>IDR</option>
            </select>
          </div>*/}
          <div>
            <button class="px-2 text-gray-900 peer focus:text-gray-500 hover:text-gray-500 transition-all duration-200">
              Language
            </button>
            <div class='shadow-md w-auto absolute top-5 z-10
		          after:content-[""] after:inline-block after:absolute after:top-0 after:bg-white
		          after:w-full after:h-full after:-z-20 after:rounded-md
              peer-focus:top-12 peer-focus:opacity-100 peer-focus:visible 
              transition-all duration-300 invisible  opacity-0'>
              <ul class='py-1 px-1 flex flex-col'>
                <li class='cursor-pointer p-1 rounded-md text-gray-900 hover:text-gray-500 text-center'>English</li>
                <li class='cursor-pointer p-1 rounded-md text-gray-900 hover:text-gray-500 text-center'>Indonesian</li>
              </ul>
            </div>
          </div>
          <div>
            <button class="px-2 text-gray-900 peer focus:text-gray-500 hover:text-gray-500 transition-all duration-200">
              Currency
            </button>
            <div class='shadow-md w-auto absolute top-5 z-10
              after:content-[""] after:inline-block after:absolute after:top-0 after:bg-white
              after:w-full after:h-full after:-z-20 after:rounded-md
              peer-focus:top-12 peer-focus:opacity-100 peer-focus:visible 
              transition-all duration-300 invisible  opacity-0'>
              <ul class='py-1 px-1 flex flex-col'>
                <li class='cursor-pointer p-1 rounded-md text-gray-900 hover:text-gray-500 text-center'>USD</li>
                <li class='cursor-pointer p-1 rounded-md text-gray-900 hover:text-gray-500 text-center'>IDR</li>
              </ul>
            </div>
          </div>
          <div className="px-2">
            Call Us (123)4567890
          </div>
        </div>
        <div className="flex justify-end px-2">
          Free delivery every Monday and thursday.
        </div>
      </div>

      {/*Navbar*/}
      <div className="flex flex-row justify-between border-b-2 py-4">
        <div className="cursor-pointer text-3xl font-black px-2">
          Shop.
        </div>
        <div className="hidden md:flex md:space-x-4 lg:flex-row lg:justify-center lg:space-x-8">
          <div className="cursor-pointer text-gray-900 hover:text-gray-500">Home</div>
          <div className="cursor-pointer text-gray-900 hover:text-gray-500">Shop</div>
          <div className="cursor-pointer text-gray-900 hover:text-gray-500">Collection</div>
          <div className="cursor-pointer text-gray-900 hover:text-gray-500">Pages</div>
          <div className="cursor-pointer text-gray-900 hover:text-gray-500">Blog</div>
          <div className="cursor-pointer text-gray-900 hover:text-gray-500">About</div>
          <div className="cursor-pointer text-gray-900 hover:text-gray-500">Contact</div>
        </div>
        <div className="flex justify-end space-x-4 lg:space-x-8 px-2">
          <div className="cursor-pointer text-gray-900 hover:text-gray-500">Search</div>
          <div className="cursor-pointer text-gray-900 hover:text-gray-500">Cart</div>
          <div className="cursor-pointer text-gray-900 hover:text-gray-500">Account</div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Paras