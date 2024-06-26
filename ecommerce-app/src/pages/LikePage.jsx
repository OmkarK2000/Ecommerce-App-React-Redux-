import { useSelector } from "react-redux"
import ProductCard from "../components/ProductCard"

const LikePage = () => {
  const {favouriteCart} = useSelector((state)=> state.favourite)
  console.log(favouriteCart)

  if(favouriteCart.length < 1){
    return <h1 className="text-center text-2xl font-bold">No favourite items</h1>
  }
  return (
    <div className="lg:mx-24 mx-[10px] flex justify-evenly flex-col items-center sm:flex-row flex-wrap">
      {favouriteCart && favouriteCart
      .map((item) => (
        <ProductCard key={item.id} item={item} isFavourite={"yes"} />
      ))
      }
  </div>
  )
}

export default LikePage