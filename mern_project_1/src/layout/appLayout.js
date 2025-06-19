import React from "react";
import Navigation5 from "./Navbar";
import Footer from "./footer";

function AppLayout({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            <Navigation5 />
            <main className="flex-grow" style={{ marginTop: "120px" }}>
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default AppLayout;