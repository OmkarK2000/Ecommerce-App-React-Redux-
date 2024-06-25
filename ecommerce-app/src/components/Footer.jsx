import FooterBox from "./FooterBox"
import FooterData from "../assets/FooterData"

const Footer = () => {
  return (
    <footer className=" lg:px-24 px-[10px] mt-16 font-pop bg-[#222] text-white pt-20 pb-10 w-full">
      <div className="flex justify-between flex-col md:flex-row ">
        {FooterData && FooterData.map((item, i) => (
          <FooterBox key={i} title={item.title} links={item.links} paragraph={item.paragraph} placeholderValue={item.placeholderValue} buttonValue={item.button} socialLinks={item.socialLinks} />
        ))}
      </div>
      <div className="mt-20">
        <p className="ext-sm text-[#b2b2b2] text-center">Copyright ©2024 All rights reserved</p>
      </div>

    </footer>
  )
}

export default Footer