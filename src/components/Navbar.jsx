import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const navItems = [
    {name: 'Home', href: "#home"},
    {name: 'About', href: "#about"},
    {name: 'Skills', href: "#skills"},
    {name: 'Projects', href: "#projects"},
    {name: 'Contact', href: "#contact"},

]

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
     <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
         isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
        )}
        >

            <div className="container flex flex-items-center justify-between">
                <a>
                    <span className="text-glow"> Petsyy </span> Portfolio
                </a>
            </div>
        </nav>
    );
}; 