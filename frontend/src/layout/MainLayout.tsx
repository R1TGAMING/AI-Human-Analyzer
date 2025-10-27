import type React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="max-w-6xl mx-auto">
            <div>
                <Header />
            </div>

            <div className="">{children}</div>

            <div className="pt-5">
                <Footer />
            </div>
        </div>
    );
};

export default MainLayout;
