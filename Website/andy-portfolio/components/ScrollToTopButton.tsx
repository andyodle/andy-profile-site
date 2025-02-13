"use client"

import Image from 'next/image';

const ScrollToTopButton = () => {
    const scrollToTop = () => {
        const tempSection = document.getElementById("home");
        if (tempSection){     
            tempSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }

    return (
        <div 
            className="fixed bottom-0 right-0 rounded-full cursor-pointer hover:brightness-50 z-50"
            onClick={() => scrollToTop()}
        >
            <Image
                src="/assets/icons/ExpandCircleUp.svg"
                alt="Profile Picture"
                width={64}
                height={64}        
            />
        </div>

    )
}

export default ScrollToTopButton
