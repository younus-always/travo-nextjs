import { navLinks } from "@/constant/constant";
import Link from "next/link";
import { TbAirBalloon } from "react-icons/tb";
import { HiBars3BottomRight } from "react-icons/hi2";

const Navbar = ({ openNav }) => {
      return (
            <div className="bg-blue-900 transition-all duration-200 ease-in-out h-[12vh] fixed w-full z-40">
                  <div className="flex items-center justify-between h-full w-11/12 xl:w-10/12 mx-auto">
                        {/* Logo */}
                        <div className="flex items-center space-x-2">
                              <div className="w-10 h-10 bg-rose-500 rounded-full flex flex-col items-center justify-center">
                                    <TbAirBalloon className="w-6 h-6 text-white" />
                              </div>
                              <h1 className="text-white text-xl md:text-2xl font-bold  uppercase">Travo</h1>
                        </div>
                        {/* Navlinks */}
                        <div className="hidden lg:flex items-center space-x-8 text-white font-medium text-base">
                              {navLinks.map((link) =>
                                    <Link key={link.id} href={link.url}>
                                          <span className="relative block w-fit  after:block after:content-[''] after:absolute after:-bottom-1 after:left-0  after:h-[3px] after:w-full after:bg-yellow-300 after:rounded-xl after:origin-center after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100">
                                                {link.label}
                                          </span>

                                    </Link>)}
                        </div>
                        {/* Button */}
                        <div className="flex items-center space-x-4">
                              <button className="py-2 px-8 md:px-12 md:py-2.5 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition duration-200 cursor-pointer">Book Now</button>
                              {/* Responsive menu */}
                              <HiBars3BottomRight onClick={openNav} className="w-8 h-8 text-white cursor-pointer lg:hidden" />
                        </div>
                  </div>
            </div >
      )
}

export default Navbar