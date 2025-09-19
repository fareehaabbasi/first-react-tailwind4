import React from "react";

function Header () {
  return (
    <>
      {/* Components */}
      <nav className="flex justify-between p-4 bg-emerald-950">
        <h1 className="text-2xl">Hello</h1>
        <div className="flex gap-4 text-white">
          <h5>About</h5>
          <h5>Services</h5>
          <h5>Contact</h5>
          <h5>FAQ</h5>
        </div>
      </nav>
    </>
  )
}

export default Header;