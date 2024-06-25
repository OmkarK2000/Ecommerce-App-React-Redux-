import { useState } from "react"
import ProductCard from "../components/ProductCard.jsx"
import { useEffect, } from "react"
import { fetchProducts } from "../functions/productsSlice"
import { useDispatch, useSelector } from "react-redux"


const Shop = () => {
  const [category, setCategory] = useState("all")

  const dispatch = useDispatch()
  const { products, loading, error } = useSelector((state) => state.products)
console.log(products)
  useEffect(() => {
    dispatch(fetchProducts(40))
  }, [])

  if(loading){
    return <h1 className="text-center font-bold text-2xl">Loading...</h1>
  }
  if(error){
    return <h1 className="text-center font-bold text-2xl">{error.message}</h1>
  }
  return (
    <div className=" font-pop mt-8">
      <div className="lg:mx-24 mx-[10px]">
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

export default Shop