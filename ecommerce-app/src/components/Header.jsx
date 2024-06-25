import { useState } from "react";
import { IoMdCart, IoMdSearch, IoMdHeartEmpty, } from "react-icons/io";
import { HiBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Header = () => {
  const [page, setPage] = useState("home")
  const [menuToggle, setMenuToggle] = useState(false)
  return (
    <header className="flex flex-col lg:mx-24 mx-[10px]  justify-between items-center font-pop border-b">
      <div className="flex w-full h-[70px] justify-between items-center bg-transparent">
        <div className="text-2xl font-bold w-[200px]"><Link to="/" onClick={() => setPage("home")} >COZA <span className="font-normal">STORE</span></Link></div>
          

        <div className="hidden lg:flex gap-12 w-[660px] text-base ">
          <Link to="/" onClick={() => setPage("home")} className={page == "home" ? "text-[#717fe0]" : ""} >Home</Link>
          <Link to="/shop" onClick={() => setPage("shop")} className={page == "shop" ? "text-[#717fe0]" : ""}>Shop</Link>
          <Link to="/blog" onClick={() => setPage("blog")} className={page == "blog" ? "text-[#717fe0]" : ""}>Blog</Link>
          <Link to="/about" onClick={() => setPage("about")} className={page == "about" ? "text-[#717fe0]" : ""}>About</Link>
          <Link to="/contact" onClick={() => setPage("contact")} className={page == "contact" ? "text-[#717fe0]" : ""}>Contact</Link>
        </div>

        <div className="flex gap-4  lg:gap-8 lg:grow items-center lg:justify-end">
          <Link className="hover:text-[#717fe0] "  ><IoMdSearch size={24} /></Link>

          <Link to="/cart" className="relative hover:text-[#717fe0]"><IoMdCart size={24} /><p className="z-1 absolute top-[-12px] right-[-12px] px-1 bg-[#717fe0] text-center text-[12px] text-white font-bold ">10</p></Link>

          <Link to="/likePage" className="relative hover:text-[#717fe0]"><IoMdHeartEmpty size={24} /><p className="z-1 absolute top-[-10px] right-[-10px] px-1 bg-[#717fe0]  text-center text-[12px] text-white font-bold ">0</p></Link>

          <Link className="relative hover:text-[#717fe0] lg:hidden" onClick={() => setMenuToggle(!menuToggle)} >{menuToggle ? <RxCross2 size={24}  /> :  <HiBars3 size={24} />}</Link>
        </div>
      </div>

      <div>
        {
          menuToggle && <div className="flex flex-col lg:hidden gap-4 w-screen px-4 py-4 text-base text-white bg-[#717fe0]">
            <Link to="/" onClick={() => setPage("home")} >Home</Link>
            <Link to="/shop" onClick={() => setPage("shop")}>Shop</Link>
            <Link to="/blog" onClick={() => setPage("blog")}>Blog</Link>
            <Link to="/about" onClick={() => setPage("about")}>About</Link>
            <Link to="/contact" onClick={() => setPage("contact")}>Contact</Link>
          </div>
        }
      </div>
    </header>
  )
}

export default Header