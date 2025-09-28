"use client"
import { useState } from "react";
import MobileNav from "./MobileNav"
import Navbar from "./Navbar"

const ResponsiveNav = () => {
      const [showNav, setShowNav] = useState(false);
      const handleNavShow = () => setShowNav(true);
      const handleNavHide = () => setShowNav(false);

      return (
            <div>
                  <Navbar openNav={handleNavShow} />
                  <MobileNav showNav={handleNavShow} closeNav={handleNavHide} />
            </div>
      )
}

export default ResponsiveNav