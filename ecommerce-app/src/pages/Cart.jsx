import { useSelector, useDispatch } from "react-redux"
import { handleQuantity, removeFromCart } from "../functions/cartSlice"
import { useEffect} from "react"
import { getCartTotal } from "../functions/cartSlice";

const Cart = () => {
  
  const {cartProducts, totalPrice} = useSelector((state) => state.cart)

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getCartTotal())
  },[cartProducts])
  
  if(cartProducts.length <= 0){
    return <h1 className="text-center text-2xl font-bold">Cart is empty</h1>
  }
  

  

  return (
    <div>
      <div className="lg:mx-24 mx-[10px] ">
        <table className="w-full">
          <thead className="border-b">
            <tr className="text-left">
              <th>PRODUCT</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
              <th>TOTAL</th>
              <th>REMOVE</th>
            </tr>
          </thead>
              <tbody className="border-b min-h-20">
          {
            cartProducts && cartProducts.map((item) =>(
            <tr key={item.id} className="text-[#888]">
              <td className="flex flex-col md:flex-row md:items-center">
                <img src={item.images[0]} alt="" className="w-16  md:w-28 md:h-28 object-cover object-top my-4" />
                <div>
                  <h6 className="md:px-8">{item.title}</h6>
                </div>
              </td>
              <td>$ {item.price}</td>
              <td className="">
                <div className="flex flex-col items-center gap-2 md:flex-row ">
                  <button className="w-[25px] h-[25px] bg-[#717fe0] rounded-full text-white hover:bg-black " onClick={()=>dispatch(handleQuantity({id: item.id, type : "DEC"}))}>-</button>
                  <span className="mx-4">{item.quantity}</span>
                  <button className="w-[25px] h-[25px] bg-[#717fe0] rounded-full text-white hover:bg-black " onClick={()=>dispatch(handleQuantity({id: item.id , type : "INC"}))}>+</button>
                </div>
              </td>
              <td>$ {item.totalPrice}</td>
              <td><button className="w-[30px] h-[30px]  md:w-[50px] md:h-[50px] bg-[#717fe0] rounded-full text-white hover:bg-black " onClick={() => dispatch(removeFromCart(item))}>X</button></td>
            </tr>
            ))
          }
          </tbody>
        </table>
        <div className="w-full flex justify-between mt-24">
        <div className="">
          <button className="bg-white border border-[#717fe0] rounded px-8 py-2 text-[#717fe0]">CONTINUE SHOPPING</button>
          <h3 className="text-xl font-medium mt-10">Coupon</h3>
          <p className="my-4">Enter your coupon code ifyou have one.</p>
          <input type="text" placeholder="Coupon Code" className="border border-[#CED4DA] px-6 py-2 mr-8 w-80" />
          <button className="bg-[#717fe0] border border-[#717fe0] rounded px-6 py-2 text-white">APPLY COUPAN</button>
        </div>
        <div>
          <h2 className="text-2xl text-end font-normal ">CART TOTALS</h2>
          <hr className="mt-2 w-60 " />
          <div className="flex justify-between my-10"><p>Total</p><p>$ {totalPrice}</p></div>
          <button className="bg-[#717fe0] text-white py-4 px-8 rounded">PROCEED TO CHECKOUT</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Cart