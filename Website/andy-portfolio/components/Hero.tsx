import Image from 'next/image';

const Hero = () => {
    return (
        <section className="pt-24 w-full flex-center flex-col bg-[#2c3144] text-white">
            <Image 
                src="/assets/images/ProfileImage.png"
                alt="Profile Picture"
                width={240}
                height={240}
                className="py-4"
            />

            <h1 className="text-center font-semibold text-4xl py-4">ANDY ODLE</h1>

            <hr className="py-2 w-1/2 mx-auto border-t-4 border-solid rounded-sm" />

            <span className="py-4 mx-12 font-semibold text-lg">Software Engineer, Entrepreneur in Grants Pass, Oregon</span>

        </section>
    )
}

export default Hero