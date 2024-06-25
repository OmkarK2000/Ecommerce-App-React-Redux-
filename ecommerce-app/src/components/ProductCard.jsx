import { IoMdHeart, IoMdHeartEmpty, } from "react-icons/io";
import { useDispatch } from "react-redux"
import { addToCart } from "../functions/cartSlice"
import { useState } from "react";
import { addToFavourite, removeFromFavourite } from "../functions/favouriteSlice";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item, isFavourite }) => {
    const { title, price, images, id } = item
    // console.log(price)
    const [quantity] = useState(1)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleAddToCart = (item) => {
        const totalPrice = quantity * price
        dispatch(addToCart({ ...item, quantity: quantity, totalPrice }))
    }

    return (
        <div className="w-[270px] mt-8 border rounded-3xl">
            <div className="w-[270px] h-[270px]">
                <img src={images[0]} alt="img" className="h-full w-full object-contain" onClick={()=> navigate(`/product/${id}`)} />
            </div>
            <div className="mt-4 mx-3 flex justify-between">
                <span>
                    <h6 className="text-[#999] text-sm">{title}</h6>
                    <p className="text-[#666] mt-2">${price}</p>
                </span>
                <span>
                <button className="" onClick={() => isFavourite === "yes" ? dispatch(removeFromFavourite(id)) : dispatch(addToFavourite(item))}>{isFavourite === "yes" ?  <IoMdHeart /> : <IoMdHeartEmpty />}</button>
                </span>
            </div>
            <button className="px-10 my-4 w-full py-2 bg-[#717fe0] text-white font-normal rounded-3xl text-sm hover:bg-white hover:text-[#717fe0]" onClick={() => handleAddToCart(item)}>Add To Cart</button>
            
        </div>
    )
}

export default ProductCard