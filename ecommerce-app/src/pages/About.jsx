import bg_1 from "../assets/images/bg-01.jpg"
import about_1 from "../assets/images/about-01.jpg"
const About = () => {
  return (
    <div className=" font-pop">
      <div className=" lg:h-auto relative">
        <img src={bg_1} alt="" className="w-full object-cover h-[240px]" />
        <h3 className="absolute z-10 left-[30%] lg:left-[44%]  top-[40%] text-5xl font-bold text-[#fff]  ">About</h3>
      </div>
      <div className="flex flex-col lg:mx-24 mx-[10px]  justify-between items-center font-pop border-b mt-16">
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-wrap lg:w-2/3 lg:pr-20 gap-4 text-[#888] text-sm">
            <h3 className="text-2xl font-bold text-black">Our Story</h3>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat consequat enim, non auctor massa ultrices non. Morbi sed odio massa. Quisque at vehicula tellus, sed tincidunt augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas varius egestas diam, eu sodales metus scelerisque congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas gravida justo eu arcu egestas convallis. Nullam eu erat bibendum, tempus ipsum eget, dictum enim. Donec non neque ut enim dapibus tincidunt vitae nec augue. Suspendisse potenti. Proin ut est diam. Donec condimentum euismod tortor, eget facilisis diam faucibus et. Morbi a tempor elit.
            </p>
            <p>Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula.</p>
            <p>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
          </div>
          <div className="flex mt-8 lg:mt-0 lg:w-1/3">
            <img src={about_1} alt="" className="w-full"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About