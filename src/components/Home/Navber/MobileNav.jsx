import Link from "next/link";
import { navLinks } from "@/constant/constant";
import { CgClose } from "react-icons/cg";

const MobileNav = ({ showNav, closeNav }) => {
      const openNav = showNav ? 'translate-x-0' : 'translate-x-[-100%]';

      return (
            <div>
                  {/* Overlay */}
                  <div className={`${openNav} fixed inset-0 transform transition-all duration-500 bg-black opacity-50 z-50 w-full h-screen`}></div>
                  {/* Navlinks */}
                  <ul className={`${openNav} fixed inset-0 flex flex-col justify-center transform transition-all duration-500 delay-300 z-50 w-[80%] sm:w-[60%] space-y-6 bg-rose-500`}>
                        {navLinks?.map((link) => (
                              <li key={link.id}>
                                    <Link href={link.url}>
                                          <span className="w-fit text-white text-lg sm:text-xl font-medium ml-12 border-white border-b-[1.5px] ">{link.label}</span>
                                    </Link>
                              </li>
                        ))}
                        {/* close button */}
                        <CgClose
                              onClick={closeNav} className="absolute top-[0.7rem] right-[1.4rem] w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </ul>
            </div>
      )
}

export default MobileNav