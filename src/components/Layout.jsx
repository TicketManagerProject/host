import React from "react";
import { useLocation } from "react-router-dom";
import MyNavbar from "mf_navbar/MyNavbar";

const Layout = ({ children }) => {
    const location = useLocation();
    const role = location.pathname.split("/")[1];

    return (
        <div className="app-layout">
            <MyNavbar role={role} />
            <div className="content-container">
                {children}
            </div>
        </div>
    );
};

export default Layout;
