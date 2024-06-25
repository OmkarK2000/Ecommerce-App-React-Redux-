import { Link } from "react-router-dom"


const FooterBox = ({ title, links, paragraph, placeholderValue, socialLinks, buttonValue }) => {
  return (
    <div className="px-4 w-[270px] mt-8">
      <div>
        <h6 className="text-base font-bold">{title}</h6>

        <div className="flex flex-col mt-8 gap-4">
          {links && links.map((link, i) => (
            <Link key={i} className="text-sm text-[#b2b2b2]" >{link}</Link>
          ))}
        </div>

        <div>
          {paragraph && <p className="text-sm text-[#b2b2b2]">{paragraph}</p>}
        </div>

        <div className="mt-4">
          {socialLinks && socialLinks.map((sLink, i) => (
            <Link key={i} className="text-sm text-[#b2b2b2] ">
              < i className={sLink}></i>
            </Link>
          ))}
        </div>

        <div className="w-full ">
          {placeholderValue && <input type="text" placeholder={placeholderValue} className="bg-transparent text-[14px] border-b w-full py-1 border-[#666]" />}
        </div>

        <div className="mt-4">
          {buttonValue && <button type="button" className="px-10 py-2 bg-[#717fe0] text-white font-normal rounded-3xl text-sm hover:bg-white hover:text-[#717fe0]">{buttonValue}</button>}
        </div>
      </div>
    </div>
  )
}

export default FooterBox