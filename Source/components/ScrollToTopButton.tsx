"use client"

import ImageSVG from '@components/ImageSVG';

const ScrollToTopButton = () => {
    const scrollToTop = () => {
        const tempSection = document.getElementById("home");
        if (tempSection){     
            tempSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }

    return (
        <div 
            className="absolute cursor-pointer brighten-200 z-50"
            onClick={() => scrollToTop()}
        >
            <div className="fixed bottom-4 right-10 sm:right-8 md:right-4 m-2">
                <ImageSVG 
                    width={48}
                    height={48}
                    fill="#a5b8ff"
                    viewBox="0 0 50 50"
                    pathData="M 24 7.0820312 C 21.986008 7.0820773 21.339123 7.1471597 19.880859 7.4960938 C 16.087005 8.4038887 12.747298 10.660362 10.246094 14.007812 C 8.4542565 16.405892 7.3956554 19.210239 7.1035156 22.328125 C 7.0055721 23.373436 7.0631546 25.66661 7.2128906 26.654297 C 7.6613812 29.612623 8.7539994 32.142412 10.591797 34.478516 C 11.179303 35.225321 12.774679 36.820697 13.521484 37.408203 C 15.437776 38.915738 17.458563 39.908183 19.769531 40.476562 C 20.421887 40.637007 21.728005 40.853939 22.396484 40.912109 C 22.923817 40.957999 25.226764 40.944368 25.75 40.892578 C 29.831903 40.488535 33.38775 38.751915 36.257812 35.761719 C 38.768843 33.145582 40.244856 30.175863 40.785156 26.654297 C 40.93628 25.669316 40.994974 23.381006 40.896484 22.328125 C 40.499884 18.088308 38.714858 14.521906 35.478516 11.505859 C 33.302521 9.4779833 30.693359 8.072377 27.982422 7.4667969 C 26.477249 7.1305654 25.979317 7.081986 24 7.0820312 z M 24 17.501953 L 28.333984 21.835938 C 30.717647 24.219745 32.657874 26.19219 32.646484 26.21875 C 32.635097 26.245309 32.146854 26.739447 31.560547 27.316406 L 30.494141 28.365234 L 27.248047 25.117188 L 24 21.871094 L 20.765625 25.105469 C 18.986558 26.88473 17.517253 28.340286 17.501953 28.339844 C 17.46121 28.338663 15.345703 26.228893 15.345703 26.189453 C 15.345703 26.171078 17.293805 24.209957 19.673828 21.830078 L 24 17.501953 z "
                />
            </div>            
        </div>

    )
}

export default ScrollToTopButton
