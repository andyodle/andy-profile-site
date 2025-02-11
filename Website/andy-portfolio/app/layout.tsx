import '@styles/globals.css';
{/* TODO: Add Navigation Component */}

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
                        {/* TODO: Navigation Menu */}
                        {children}
                    </main>
                </div>
            </body>
        </html>
    )
}

export default RootLayout
