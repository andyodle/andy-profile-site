import '@styles/globals.css';
import Nav from '@components/Nav';

export const metadata = {
    title: "Portfolio",
    descriptoin: "Learn more about Andy's projects."
}

const RootLayout = ({ children }) => {
    return (
        <html lang="eng">
            <body>
                <div>
                    <div className="main">

                    </div>

                    <main className="app">
                        <Nav />
                        {children}
                    </main>
                </div>
            </body>
        </html>
    )
}

export default RootLayout
