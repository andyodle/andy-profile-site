import '@styles/globals.css';
import { ReactNode } from 'react';
import Nav from '@components/Nav';
import Footer from '@components/Footer';
import ScrollToTopButton from '@components/ScrollToTopButton';

interface RootLayoutProps{
    children: ReactNode;
}

export const metadata = {
    title: "Portfolio",
    descriptoin: "Learn more about Andy's projects.",
    icons:{
        icon: '/favicon.png'
    },
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
    return (
        <html lang="eng">
            <body className="flex flex-col min-h-screen">
                <div className="flex-grow">
                    <div className="main">

                    </div>

                    <main className="app">
                        <Nav />
                        {children}                                              
                    </main>
                    
                </div> 

                <Footer />

                <ScrollToTopButton />

            </body>
        </html>
    )
}

export default RootLayout
