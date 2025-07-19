import Image from "next/image";
import {Menu,X,} from "lucide-react"

export const Menu_Lota = ({ toggleMenu, isMenuOpen, closeMenu}) => {
    const menuItems = [
        { href: "#Home", label: "Home" },
        { href: "#Valar0", label: "Valar" },
        { href: "#", label: "Elfs" },
        { href: "#", label: "Dwarves" },
        { href: "#", label: "Humans" },
    ]
    return(

      <nav className="fixed top-0 w-full bg-black/60 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              {/* <Image
                src="/vercel.svg"
                width={500}
                height={500}
                alt="Byluco logo"
                className="w-8 h-8 mr-2"
                /> */}
              <div className="text-2xl text-yellow-500/90 text-shadow-lg/80 font-ringm">TS</div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              {menuItems.map((item,i) => (
                  <a key={i} href={item.href} className="font-ringm text-shadow-amber-100 hover:text-[#df891c] transition-colors">
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-[#f4e7d2] transition-colors"
              aria-label="Toggle menu"
              >
              {isMenuOpen ? <X className="w-6 h-6 text-[#df891c]" /> : <Menu className="w-6 h-6 text-[#df891c]" />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
              <div className="md:hidden mt-4 pb-4 border-t border-[#f4e7d2]">
              <div className="flex flex-col space-y-4 pt-4">
                {menuItems.map((item,i) => (
                    <a
                      key={i}
                      href={item.href}
                      onClick={closeMenu}
                      className="text-slate-600 hover:text-[#df891c] transition-colors py-2 px-4 rounded-lg hover:bg-[#f4e7d2]"
                    >
                    {item.label}
                  </a>
                ))}
                <div className="pt-2 border-t border-[#f4e7d2]">
                  <button
                    className="w-full bg-gradient-to-r from-[#df891c] to-[#e6a347] hover:from-[#c67a15] hover:to-[#df891c] text-white"
                    onClick={closeMenu}
                    >
                    <a href="#contact">Contactar Ahora</a>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
)
}