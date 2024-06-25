import bg_1 from "../assets/images/bg-01.jpg"
import {  IoMdHeartEmpty, } from "react-icons/io";

const Contact = () => {
  return (
    <div className=" font-pop">
      <div className="lg:h-auto relative">
        <img src={bg_1} alt="" className="w-full object-cover h-[240px]" />
        <h3 className="absolute z-10 left-[30%] lg:left-[42%]  top-[40%] text-5xl font-bold text-[#fff]  ">Contact</h3>
      </div>
      <div className="flex  lg:mx-24 mx-[10px] mt-32  font-pop ">
        <div className="w-1/2 px-[70px] border">
          <div className="flex flex-col">
            <h2 className="text-center text-2xl text-[#333] mt-16">Send Us A Message</h2>
            <input type="text" placeholder="Your Email Address" className="mt-8 border h-[50px] w-full text-[13px] text-[#333 pl-[62px] pr-[30px] outline-none " />
            <textarea name="" id="" cols={4} className="border outline-none mt-6 px-[28px] py-[25px] text-[#333] text-[13px] min-h-[199px]" placeholder="How Can We Help?"></textarea>
            <button className="mt-8 mb-16 px-10 py-3 bg-black text-white font-normal rounded-3xl text-sm  hover:bg-[#717fe0]">SUBMIT</button>
          </div>
        </div>

        <div className="w-1/2 border flex justify-center ">
          <div className="w-[400px] pt-32">
            <div className="flex pb-12">
              <span className="w-[60px] flex justify-center"><IoMdHeartEmpty size={24}/></span>
              <span>
                <h3 className="text-[18px] text-[#333]">Address</h3>
                <p className="max-w-[245px] pt-6 text-[#888] text-[15px]">Coza Store Center 8th floor, 379 Hudson St, New York 10018 US</p>
              </span>
            </div>
            <div className="flex pb-12">
              <span className="w-[60px] flex justify-center"><IoMdHeartEmpty size={24}/></span>
              <span>
                <h3 className="text-[18px] text-[#333]">Lets Talk</h3>
                <p className="max-w-[245px] pt-6 text-[15px] text-[#717fe0]">+1 800 1236879</p>
              </span>
            </div>
            <div className="flex pb-12">
              <span className="w-[60px] flex justify-center"><IoMdHeartEmpty size={24}/></span>
              <span>
                <h3 className="text-[18px] text-[#333]">Sale Support</h3>
                <p className="max-w-[245px] pt-6 text-[#717fe0] text-[15px]">contact@example.com</p>
              </span>
            </div>
            
            
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact