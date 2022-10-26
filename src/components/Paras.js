const Paras = () => {
  return (
    <>
    <div className="">

      {/*Header*/}
      <div className="flex flex-row justify-between border-b-2 pb-2">
        <div className="flex flex-row divide-x">
          <div className="pr-4">
            <select>
              <option>English</option>
              <option>Indonesian</option>
            </select>
          </div>
          <div className="px-4">
            <select>
              <option>USD</option>
              <option>IDR</option>
            </select>
          </div>
          <div className="pl-4">Call Us (123)4567890</div>
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
        <div className="flex flex-row justify-between">
          <div className="pr-4">Home</div>
          <div className="px-4">Shop</div>
          <div className="px-4">Collection</div>
          <div className="px-4">Pages</div>
          <div className="px-4">Blog</div>
          <div className="px-4">About</div>
          <div className="pl-4">Contact</div>
        </div>
        <div className="flex justify-end">
          <div className="pr-4">Search</div>
          <div className="px-4">Cart</div>
          <div className="pl-4">Account</div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Paras