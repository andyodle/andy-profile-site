"use client"

import { useState, useRef } from 'react';
import Link from 'next/link'
import Image from 'next/image';

const Nav = () => {
    const [ toggleDropdown, setToggleDropdown ] = useState(false);

    const scrollToSection = (sectionToFocus: string) => {
        const tempSection = document.getElementById(sectionToFocus);
        if (tempSection){     
            tempSection.scrollIntoView({ behavior: "smooth", block: "start" });
            setToggleDropdown(false);
        }
    }

    return (
        <div className="w-full fixed top-0 z-50">
        <nav className="flex-between w-full pt-3 px-8 py-4 bg-primary-nav-blue text-white">
            <Link href="/" className="flex gap-2 flex-center hover:text-primary-orange">
                <span 
                    className="text-3xl object-contain"
                    onClick={() => scrollToSection("home")}
                >
                    ANDY ODLE
                </span>                
            </Link>  

            {/* LinkedIn Link */}
            {/* Github Link */}

            {/* Desktop Navigation */}
            <div className="sm:flex hidden gap-3 md:gap-5">
                <Link
                    href="#about"
                    className="dropdown_link"
                >
                    ABOUT ME
                </Link>

                <Link
                    href="#projects"
                    className="dropdown_link"
                >
                    PROJECTS
                </Link>                

                <Link
                    href="#contact"
                    className="dropdown_link"
                >
                    CONTACT
                </Link> 
            </div>

            {/* Mobile Navigation */}
            <div className="sm:hidden flex">
                <div className="flex">
                    <Image 
                        src="/assets/icons/HamburgerMenu.svg"
                        width={32}
                        height={32}
                        alt="Menu Button"
                        className="hover:bg-primary-orange"
                        onClick={() => setToggleDropdown((prev) => !prev)}
                    />                   
                </div>           
            </div>           

        </nav>

        {/* Collapseable Mobile Links */}
        {toggleDropdown && (
            <div className="flex flex-col gap-2  mt-[0.5] p-5 w-full justify-start items-start bg-primary-nav-blue text-white text-2xl sm:hidden">
                <span
                    className="dropdown_link w-full cursor-pointer"
                    onClick={() => scrollToSection("about")}
                >
                    ABOUT ME
                </span>

                <span
                    className="dropdown_link w-full cursor-pointer"
                    onClick={() => scrollToSection("projects")}
                >
                    PROJECTS
                </span>                

                <span
                    href="#contact"
                    className="dropdown_link w-full cursor-pointer"
                    onClick={() => scrollToSection("contact")}
                >
                    CONTACT
                </span>                            
            </div>
        )}         
        </div>
    )
}

export default Nav
