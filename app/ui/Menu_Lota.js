import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";

export const Menu_Lota = ({ toggleMenu, isMenuOpen, closeMenu }) => {
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const menuRef = useRef(null);
  const scrollTimeoutRef = useRef(null);

  const handleNavigation = (id) => {
    if (isScrolling) return; // No navegar si estamos en medio de un scroll
    
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
    setOpenSubmenu(null);
  };

  const handleSubmenuToggle = (e, item) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isScrolling) return;
    
    if (openSubmenu === item.label) {
      handleNavigation(item.href);
      return;
    }
    
    setOpenSubmenu(item.label);
  };

  const handleSubmenuItemClick = (e, href) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isScrolling) return;
    
    handleNavigation(href);
  };

  // Manejar el inicio del scroll
  const handleScrollStart = () => {
    setIsScrolling(true);
    
    // Limpiar timeout anterior si existe
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
  };

  // Manejar el fin del scroll
  const handleScrollEnd = () => {
    scrollTimeoutRef.current = setTimeout(() => {
      setIsScrolling(false);
    }, 100);
  };

  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
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
        { href: "Teleri-Falmari", label: "Teleri-Falmari" },
        { href: "Teleri-Sindar", label: "Teleri-Sindar" },
        { href: "Teleri-Nandor", label: "Teleri-Nandor" },
      ]
    },
    {
      href: "Half-Elves",
      label: "Half-Elves",
      submenu: [
        { href: "Edain - Bëorians-Sindar", label: "Edain-Bëorians-Sindar" },
        { href: "Peredhil", label: "Peredhil" },
        { href: "Peredhil-Mortal", label: "Peredhil-Mortal" },
      ]
    },
    {
      href: "Dwarves",
      label: "Dwarves",
      submenu: [
        { href: "King of Durin's Folk", label: "KDF" },
        { href: "King of the Broadbeam Dwarves", label: "KBD" },
        { href: "Dwarves of Nogrod", label: "Nogrod" },
        { href: "Dwarves of Durin's Folk", label: "Durin's Folk" }
      ]
    },
    {
      href: "Men",
      label: "Men",
      submenu: [
        { href: "Edain - Bëorians", label: "House of Bëor" },
        { href: "Edain - Haladin", label: "Haladin" },
        { href: "Edain - Hadorians", label: "Hadorians" },
        { href: "Easterlings", label: "Easterlings" },
        { href: "Númenoreans", label: "Númenoreans" },
        { href: "Dúnedain-Arnor", label: "Dúnedain-Arnor" },
        { href: "Dúnedain-Arthedain", label: "Dúnedain-Arthedain" },
        { href: "Dúnedain-Gondor", label: "Dúnedain-Gondor" },
        { href: "Dúnedain", label: "Dúnedain" },
        { href: "Reunited Kingdom", label: "Reunited Kingdom" },
        { href: "Stewards", label: "Stewards" },
        { href: "Dol Amroth", label: "Dol Amroth" },
        { href: "Rhovanion", label: "Rhovanion" },
        { href: "Rohan", label: "Rohan" },
        { href: "Skin Changers", label: "Skin Changers" },
        { href: "Princes of Ithilien", label: "Ithilien" },
        { href: "Kings of Dale", label: "Dale" },
        { href: "Chiefs of the Drúedain", label: "Drúedain" },
      ]
    },
    { href: "Hobbits", label: "Hobbits" },
    {
      href: "Others",
      label: "Others",
      submenu: [
        { href: "Ents", label: "Ents" },
        { href: "Great Eagles", label: "Great Eagles" },
        { href: "Great Spiders", label: "Great Spiders" },
        { href: "Werewolves", label: "Werewolves" },
        { href: "Dragons", label: "Dragons" },
        { href: "Unknown", label: "Unknown" },
      ]
    },
    { href: "contactme", label: "ContactMe" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-black/80 z-[5000]" ref={menuRef}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-2xl text-yellow-500/90 text-shadow-lg/80 font-ringm">TS</div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {menuItems.map((item, i) => (
              <div
                key={i}
                className="relative group"
                onMouseEnter={() => setOpenSubmenu(item.label)}
                onMouseLeave={() => setOpenSubmenu(null)}
              >
                <button
                  className="cursor-pointer font-ringm text-shadow-amber-100 hover:text-[#df891c] transition-colors"
                  onClick={() => handleNavigation(item.href)}
                >
                  {item.label}
                </button>
                
                {item.submenu && (
                  <div
                    className={`${openSubmenu === item.label ? 'block' : 'hidden'} 
                      group-hover:block absolute mt-0 pt-5 rounded-md shadow-lg z-1001
                      ${item.label === "Men" ? 'w-96 grid grid-cols-2 -left-42' : 'w-48'}`}
                  >
                    <div className={`bg-black/90 ${item.label === "Men" ? 'grid grid-cols-2' : ''}`}>
                      {item.submenu.map((subItem, j) => (
                        <button
                          key={j}
                          className="block cursor-pointer w-full text-left px-4 py-2 font-ringm hover:text-[#df891c] transition-colors"
                          onClick={() => handleNavigation(subItem.href)}
                        >
                          {subItem.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
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
          <div 
            className="md:hidden mt-4 pb-4 border-t border-[#f4e7d2] max-h-[70vh] overflow-y-auto"
            onTouchStart={handleScrollStart}
            onTouchMove={handleScrollStart}
            onTouchEnd={handleScrollEnd}
            onScroll={handleScrollStart}
          >
            <div className="flex flex-col space-y-4 pt-4">
              {menuItems.map((item, i) => {
                if (item.submenu) {
                  return (
                    <div key={i} className="flex flex-col">
                      <button
                        className={`text-left cursor-pointer font-ringm transition-colors py-2 flex justify-between items-center ${
                          isScrolling ? 'opacity-70' : 'text-shadow-amber-100 hover:text-[#df891c]'
                        }`}
                        onClick={(e) => handleSubmenuToggle(e, item)}
                        onTouchStart={(e) => {
                          e.preventDefault();
                        }}
                        onTouchEnd={(e) => {
                          e.preventDefault();
                          if (!isScrolling) {
                            handleSubmenuToggle(e, item);
                          }
                        }}
                        disabled={isScrolling}
                      >
                        <span>{item.label}</span>
                        <span className={`transform transition-transform ${openSubmenu === item.label ? 'rotate-180' : ''}`}>
                          ▼
                        </span>
                      </button>
                      <div 
                        className={`${openSubmenu === item.label ? 'block' : 'hidden'} pl-4 mt-2 space-y-2 ${item.label === "Men" ? 'grid grid-cols-2 gap-2' : ''}`}
                        onClick={(e) => e.stopPropagation()}
                        onTouchStart={(e) => e.stopPropagation()}
                      >
                        {item.submenu.map((subItem, j) => (
                          <button
                            key={j}
                            className={`block w-full text-left font-ringm transition-colors py-2 pl-2 border-l border-amber-800 ${
                              isScrolling ? 'opacity-70' : 'hover:text-[#df891c]'
                            }`}
                            onClick={(e) => handleSubmenuItemClick(e, subItem.href)}
                            onTouchStart={(e) => {
                              e.preventDefault();
                              if (!isScrolling) {
                                handleSubmenuItemClick(e, subItem.href);
                              }
                            }}
                            disabled={isScrolling}
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
                    className={`text-left cursor-pointer font-ringm transition-colors py-2 ${
                      isScrolling ? 'opacity-70' : 'text-shadow-amber-100 hover:text-[#df891c]'
                    }`}
                    onClick={() => {
                      if (!isScrolling) handleNavigation(item.href);
                    }}
                    onTouchStart={() => {
                      if (!isScrolling) handleNavigation(item.href);
                    }}
                    disabled={isScrolling}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
      
      <style jsx>{`
        /* Prevenir zoom en inputs en iOS */
        @media screen and (max-width: 768px) {
          button {
            touch-action: manipulation;
          }
          
          /* Prevenir highlight azul en elementos táctiles en iOS */
          button, 
          .submenu-item {
            -webkit-tap-highlight-color: transparent;
          }
          
          /* Mejorar la experiencia de scroll */
          .overflow-y-auto {
            -webkit-overflow-scrolling: touch;
            scroll-behavior: smooth;
          }
        }
      `}</style>
    </nav>
  );
};