import { useState } from "react"
import slide_3 from "../assets/images/slide-03.jpg"
import ProductCard from "../components/ProductCard.jsx"
import { useEffect, } from "react"
import { fetchProducts } from "../functions/productsSlice"
import { useDispatch, useSelector } from "react-redux"

const Home = () => {

  const [category, setCategory] = useState("all")

  const dispatch = useDispatch()
  const { products, loading, error } = useSelector((state) => state.products)
console.log(products)
  useEffect(() => {
    dispatch(fetchProducts(12))
  }, [])

  if(loading){
    return <h1 className="text-center font-bold text-2xl">Loading...</h1>
  }
  if(error){
    return <h1 className="text-center font-bold text-2xl">{error.message}</h1>
  }

  return (
    <div className=" font-pop ">
      <div className=" relative lg:h-auto">
        <img src={slide_3} alt="" className=" h-[400px] md:h-auto w-full object-cover " />
        <h3 className="absolute z-10 left-[30px] lg:left-[130px]  top-[40%] text-xl lg:text-3xl text-[#333] ">Mens Collection</h3>
        <h2 className="absolute z-10 left-[30px] lg:left-[130px]  top-[50%] text-2xl lg:text-5xl font-medium text-[#333] font-serif">NEW ARRIVALS</h2>
        <button className="absolute z-10 left-[30px] lg:left-[130px]  top-[65%]  px-8 py-3 bg-[#717fe0] text-white  rounded-3xl text-sm font-semibold hover:bg-[#222]">SHOP NOW</button>
      </div>
      <div className="lg:mx-24 mx-[10px]">
        <div className="mt-16 mb-8">
          <h2 className="font-bold text-4xl">PRODUCT OVERVIEW</h2>
        </div>
        <div className="mb-8 flex justify-between flex-col lg:flex-row gap-4 lg:gap-0">
          <span className="flex gap-8 flex-wrap lg:flex-nowrap">
            <button className={category == "all" ? "text-[#333] border-b border-b-[#333]" : "text-[#888] border-b-transparent hover:border-b hover:text-[#333] hover:border-b-[#333]"} onClick={() => setCategory("all")}>All Products</button>
            <button className={category == "woman" ? "text-[#333] border-b border-b-[#333]" : "text-[#888] border-b-transparent hover:border-b hover:text-[#333] hover:border-b-[#333]"} onClick={() => setCategory("woman")}>Woman</button>
            <button className={category == "men" ? "text-[#333] border-b border-b-[#333]" : "text-[#888] border-b-transparent hover:border-b hover:text-[#333] hover:border-b-[#333]"} onClick={() => setCategory("men")}>Men</button>
            <button className={category == "bag" ? "text-[#333] border-b border-b-[#333]" : "text-[#888] border-b-transparent hover:border-b hover:text-[#333] hover:border-b-[#333]"} onClick={() => setCategory("bag")}>Bag</button>
            <button className={category == "Shoes" ? "text-[#333] border-b border-b-[#333]" : "text-[#888] border-b-transparent hover:border-b hover:text-[#333] hover:border-b-[#333]"} onClick={() => setCategory("Shoes")}>Shoes</button>
            <button className={category == "watches" ? "text-[#333] border-b border-b-[#333]" : "text-[#888] border-b-transparent hover:border-b hover:text-[#333] hover:border-b-[#333]"} onClick={() => setCategory("watches")}>Watches</button>
          </span>
          <span className="flex gap-2">
            <button className="border px-5 py-2 text-[#888] hover:text-white hover:bg-[#717fe0]">Filter</button>
            <button className="border px-5 py-2 text-[#888] hover:text-white hover:bg-[#717fe0]">Search</button>
          </span>
        </div>
      </div>
      <div className="lg:mx-24 mx-[10px] flex justify-evenly flex-col items-center sm:flex-row flex-wrap">
        {
          products.products && products.products.map((item) => {
            return <ProductCard item={item} key={item.id} />
          })
        }
      </div>
    </div>
  )
}

export default Home