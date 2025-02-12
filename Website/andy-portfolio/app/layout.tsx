import '@styles/globals.css';
import Nav from '@components/Nav';
import Footer from '@components/Footer';

export const metadata = {
    title: "Portfolio",
    descriptoin: "Learn more about Andy's projects."
}

const RootLayout = ({ children }) => {
    return (
        <html lang="eng">
            <body className="flex flex-col min-h-screen">
                <div>
                    <div className="main">

                    </div>

                    <main className="app">
                        <Nav />
                        {children}
                        <Footer />                        
                    </main>
                </div>                
            </body>
        </html>
    )
}

export default RootLayout
