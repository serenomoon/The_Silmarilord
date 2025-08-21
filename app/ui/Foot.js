import {
  Mail,
  Instagram,
  Linkedin,
  ChevronLeft,
  ChevronRight,
  Palette,
  Shield,
  Globe,
  User,
  Menu,
  X,
} from "lucide-react"

export const Foot = () => {
    return (
        <footer id="contactme" className="w-full border-yellow-500/60 border-y-2 bg-gray-900 text-shadow-lg/80 py-12 px-4">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <div className="flex items-center mb-4 text-yellow-500/90">
                            <h3 className="text-2xl font-ringm pr-2">TS</h3>
                            <h3 className="text-lg font-bold">The Sylmarilord</h3>
                        </div>
                        <p className="text-slate-300 mb-4">
                            Info about me, my website, and how to contact me.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.instagram.com/byluco_studio/" className="text-slate-300 hover:text-yellow-500/90 transition-colors">
                                <Instagram className="w-6 h-6" />
                            </a>
                            <a href="https://www.linkedin.com/in/saulofernandez/" className="text-slate-300 hover:text-yellow-500/90 transition-colors">
                                <Linkedin className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-[#df891c]">Contact</h4>
                        <div className="space-y-2">
                            <div className="flex items-center">
                                <Mail className="w-5 h-5 mr-2 text-[#e6a347]" />
                                <span className="text-slate-300">studio@byluco.com.ar</span>
                            </div>
                            <div className="flex items-center">
                                <Globe className="w-5 h-5 mr-2 text-[#e6a347]" />
                                <span className="text-slate-300">www.byluco.com.ar</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-[#df891c]">Services</h4>
                        <ul className="space-y-2 text-slate-300">
                            <li className="hover:text-[#e6a347] transition-colors cursor-pointer">Web Development</li>
                            <li className="hover:text-[#e6a347] transition-colors cursor-pointer">Maintenance</li>
                            <li className="hover:text-[#e6a347] transition-colors cursor-pointer">Uruk-hai Making</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
                    <p>Made By Byluco&copy;  2025.</p>
                </div>
            </div>
        </footer>
    )
}