import { navLinks } from "@/constant/constant";
import Link from "next/link";
import { TbAirBalloon } from "react-icons/tb";

const Navbar = () => {
      return (
            <div className="bg-blue-900 transition-all duration-200 ease-in-out h-[16vh] z-50">
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
                                          <p className="w-fit relative block after:block after:content-[''] after:absolute after:h-1 after:bg-yellow-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition duration-200 after:origin-right">{link.label}</p>
                                    </Link>)}
                        </div>
                  </div>
            </div >
      )
}

export default Navbar