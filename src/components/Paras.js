const Paras = () => {
  return (
    <>
    <div className="">

      {/*Header*/}
      <div className="flex flex-row justify-between border-b-2 pb-2">
        <div className="flex flex-row divide-x">
          <div className="pr-2">
            <select>
              <option>English</option>
              <option>Indonesian</option>
            </select>
          </div>
          <div className="px-2">
            <select>
              <option>USD</option>
              <option>IDR</option>
            </select>
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