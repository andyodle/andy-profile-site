import '@styles/globals.css';
import { ReactNode } from 'react';
import Nav from '@components/Nav';
import Footer from '@components/Footer';
import ScrollToTopButton from '@components/ScrollToTopButton';

interface RootLayoutProps{
    children: ReactNode;
}

export const metadata = {
    title: "Andy's Portfolio",
    description: "Andy's portfolio as a software engineer, specializing in designing, developing and optimizing software solutions.",
    locale: 'en_US',
    type: 'website',
    icons:{
        icon: '/favicon.png'
    },
    openGraph: {
        title: "Andy's Portfolio",
        description: "Andy's portfolio as a software engineer, specializing in designing, developing and optimizing software solutions.",
        url: "https://andy-profile.netlify.app",
        images: [
            {
                url: 'https://andy-profile.netlify.app/assets/images/ProfileImage.png',
                width: 200,
                height: 200,
              },            
        ],
    },
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
    return (
        <html lang="en-US">
            <body className="min-w-screen min-h-screen">
                <ScrollToTopButton />

                <div className="flex-grow">

                    <main className="app">
                        <Nav />
                        {children}                                              
                    </main>
                    
                </div> 

                <Footer />

            </body>
        </html>
    )
}

export default RootLayout
