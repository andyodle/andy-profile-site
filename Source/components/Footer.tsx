const YEAR = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className="w-full pt-3 px-8 py-4 flex-shrink-0 flex-center gap-1 mt-auto bg-primary-nav-blue text-white">
            Copyright © <time>{YEAR}</time> Andy Odle
        </footer>
    )
}

export default Footer
