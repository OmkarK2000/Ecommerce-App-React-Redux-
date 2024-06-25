import bg_2 from "../assets/images/bg-02.jpg"

const Blog = () => {
  return (
    <div className=" font-pop">
      <div className=" lg:h-auto relative">
        <img src={bg_2} alt="" className="w-full object-cover h-[240px]" />
        <h3 className="absolute z-10 left-[35%] lg:left-[47%]  top-[40%] text-5xl font-bold text-[#fff] ">Blog</h3>
      </div>
    </div>
  )
}

export default Blog