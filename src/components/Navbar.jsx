import { useState, useEffect } from "react";
import logo from "../assets/logo.png";


const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Services', href: '#services' },
    { label: 'Team', href: '#team' },
    { label: 'About', href: '#about' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact Us', href: '#contact' }
];


function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('#home');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection('#' + entry.target.id);
                    }
                });
            },
            { rootMargin: '-100px 0px -70% 0px' }

        );

        navLinks.forEach((link) => {
            const el = document.querySelector(link.href);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();



    }, []);

    return (
        <header className="sticky top-0 z-50 bg-white/90 md:bg-white  border-b border-gray-200">

            <div className="px-0 min-[992px]:px-4" >
                <div className="flex items-center justify-between h-20">

                    <a href="#home" className="py-5 px-4">
                        <img src={logo} alt="onepager" className="max-w-[300px] md:max-w-full" />
                    </a>


                    <nav className="hidden md:flex items-center  md:gap-[1px] min-[992px]:gap-[4px] min-[1200px]:gap-[17px]">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href;
                            return (

                                <a
                                    key={link.href}
                                    href={link.href}
                                    className={`group relative uppercase md:text-[13px] md:px-1.5 md:py-3 min-[992px]:text-[16px] min-[992px]:p-[11px] min-[1200px]:text-[18px] min-[1200px]:px-4 min-[1200px]:py-3 ${isActive ? 'text-white' : 'text-[#010000] hover:text-white'}`}
                                >

                                    <span className={`absolute inset-0 bg-brand -skew-x-[25deg] transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></span>
                                    <span className="relative">{link.label}</span>

                                </a>
                            );
                        })}
                    </nav>


                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden" aria-label="Open menu">

                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M4 6h16M4 12h16M4 18h16" />
                        </svg>

                    </button>


                </div>



                {isOpen && (
                    <nav className="md:hidden flex flex-col gap-[0.1px] pt-6 pb-6">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href;
                            return (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-[17px] uppercase p-1.5 ml-[30px] ${isActive ? 'text-brand' : 'text-[#010000] hover:text-brand'}`}
                                >
                                    {link.label}
                                </a>
                            );
                        })}
                    </nav>
                )}





            </div>





        </header>



    )
}
export default Navbar;