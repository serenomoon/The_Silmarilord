import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export const Menu_Lota = ({ toggleMenu, isMenuOpen, closeMenu }) => {
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const elfMenuRef = useRef(null);
  const submenuRef = useRef(null);

  const handleClick = (id) => {
    if (id === "Home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    closeMenu();
    setOpenSubmenu(null); // Cerrar submenú al seleccionar cualquier opción
  };

  const handleElfsClick = (e, href, label) => {
    if (window.innerWidth < 768) { // Solo para móvil
      e.preventDefault();
      setOpenSubmenu(openSubmenu === label ? null : label);
    } else {
      handleClick(href);
    }
  };

  // Cerrar el menú al hacer click fuera (solo móvil)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (elfMenuRef.current && !elfMenuRef.current.contains(event.target)) {
        setOpenSubmenu(null);
      }
    };

    if (window.innerWidth < 768) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const menuItems = [
    { href: "Home", label: "Home" },
    {
      href: "Ainur",
      label: "Ainur",
      submenu: [
        { href: "Valar", label: "Valar" },
        { href: "Maia", label: "Maia" }
      ]
    },
    {
      href: "Elfs",
      label: "Elfs",
      submenu: [
        { href: "Minyar", label: "Minyar" },
        { href: "Vanyar", label: "Vanyar" },
        { href: "Tatyar", label: "Tatyar" },
        { href: "Ñoldor", label: "Ñoldor" },
        { href: "Nelyar", label: "Nelyar" },
        { href: "Nelyar", label: "Nelyar" },
        { href: "Teleri-Falmari", label: "Teleri-Falmari" },
        { href: "Teleri-Sindar", label: "Teleri-Sindar" },
        { href: "Teleri-Nandor", label: "Teleri-Nandor" },
      ]
    },
    {
      href: "Half-Elves",
      label: "Half-Elves",
      submenu: [
        { href: "Edain-Sindar", label: "Edain-Sindar" },
        { href: "Peredhil", label: "Peredhil" },
        { href: "Peredhil-Mortal", label: "Peredhil-Mortal" },
      ]
    },
    {
      href: "Dwarves",
      label: "Dwarves",
      submenu: [
        { href: "KDF", label: "KDF" }
      ]
    },
    { href: "", label: "Men" },
    {
      href: "Others",
      label: "Others",
      submenu: [
        { href: "Ents", label: "Ents" }
      ]
    },
  ];

  const renderMenuItem = (item, i) => {
    if (item.submenu) {
      return (
        <div
          key={i}
          className="relative group"
          ref={elfMenuRef}
          onMouseEnter={() => window.innerWidth >= 768 && setOpenSubmenu(item.label)}
          onMouseLeave={() => window.innerWidth >= 768 && setTimeout(() => {
            if (!submenuRef.current?.matches(':hover')) {
              setOpenSubmenu(null);
            }
          }, 100)}
        >
          <button
            className="cursor-pointer font-ringm text-shadow-amber-100 hover:text-[#df891c] transition-colors"
            onClick={(e) => handleElfsClick(e, item.href, item.label)}
          >
            {item.label}
          </button>
          <div
            ref={submenuRef}
            className={`${openSubmenu === item.label ? 'block' : 'hidden'} md:group-hover:block absolute -left-4 mt-0 pt-5 w-48 rounded-md shadow-lg z-1001`}
            onMouseEnter={() => window.innerWidth >= 768 && setOpenSubmenu(item.label)}
            onMouseLeave={() => window.innerWidth >= 768 && setOpenSubmenu(null)}
          >
            <div className="bg-black/90">
              {item.submenu.map((subItem, j) => (
                <button
                  key={j}
                  className="block cursor-pointer w-full text-left px-4 py-2 font-ringm hover:text-[#df891c] transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClick(subItem.href);
                  }}
                >
                  {subItem.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      );
    }
    return (
      <button
        key={i}
        className="cursor-pointer font-ringm text-shadow-amber-100 hover:text-[#df891c] transition-colors"
        onClick={() => handleClick(item.href)}
      >
        {item.label}
      </button>
    );
  };

  return (
    <nav className="fixed top-0 w-full bg-black/60 z-[1000]">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-2xl text-yellow-500/90 text-shadow-lg/80 font-ringm">TS</div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {menuItems.map((item, i) => renderMenuItem(item, i))}
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
              {menuItems.map((item, i) => {
                if (item.submenu) {
                  return (
                    <div key={i} className="flex flex-col">
                      <button
                        className="text-left cursor-pointer font-ringm text-shadow-amber-100 hover:text-[#df891c] transition-colors"
                        onClick={(e) => {
                          if (openSubmenu === item.label) {
                            handleClick(item.href);
                          } else {
                            e.preventDefault();
                            setOpenSubmenu(item.label);
                          }
                        }}
                      >
                        {item.label}
                      </button>
                      <div className={`${openSubmenu === item.label ? 'block' : 'hidden'} pl-4 mt-2 space-y-2`}>
                        {item.submenu.map((subItem, j) => (
                          <button
                            key={j}
                            className="block w-full text-left font-ringm hover:text-[#df891c] transition-colors"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleClick(subItem.href);
                            }}
                          >
                            {subItem.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                }
                return (
                  <button
                    key={i}
                    className="text-left cursor-pointer font-ringm text-shadow-amber-100 hover:text-[#df891c] transition-colors"
                    onClick={() => handleClick(item.href)}
                  >
                    {item.label}
                  </button>
                );
              })}
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
  );
};