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
          <button class="px-2 peer transition-all duration-200">Language</button>
            <div class=' w-80 absolute top-5 z-10
              after:content-[""] after:inline-block after:absolute after:top-0 after:bg-white/40
              after:w-full after:h-full after:-z-20 after:blur-[2px] after:rounded-lg
              peer-focus:top-12 peer-focus:opacity-100 peer-focus:visible 
              transition-all duration-300 invisible  opacity-0 
            '>
            <ul class='py-6 px-3 flex flex-col gap-3'>
              <li class='cursor-pointer bg-sky-300 p-3 rounded-md hover:opacity-90 text-white'>English</li>
              <li class='cursor-pointer bg-blue-300 p-3 rounded-md hover:opacity-90 text-white'>Indonesian</li>
            </ul>
            </div>
          <div className="pl-2">Call Us (123)4567890</div>
        </div>
        <div className="flex justify-end">
          <div>Free delivery every Monday and thursday.</div>
        </div>
      </div>

      {/*Navbar*/}
      <div className="flex flex-row justify-between border-b-2 py-4">
        <div className="text-3xl font-black">
          Shop.
        </div>
        <div className="flex flex-row justify-between space-x-8">
          <div>Home</div>
          <div>Shop</div>
          <div>Collection</div>
          <div>Pages</div>
          <div>Blog</div>
          <div>About</div>
          <div>Contact</div>
        </div>
        <div className="flex justify-end space-x-8">
          <div>Search</div>
          <div>Cart</div>
          <div>Account</div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Paras