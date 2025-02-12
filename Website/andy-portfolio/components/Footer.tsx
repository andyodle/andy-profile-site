const YEAR = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className="mt-auto flex-center gap-1 w-full pt-3 px-8 py-4 bg-primary-nav-blue text-white">
            <time>{YEAR}</time> © Andy Odle
        </footer>
    )
}

export default Footer
