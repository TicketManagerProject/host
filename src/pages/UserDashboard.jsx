import React from "react";
import { useLocation } from "react-router-dom";
import MyNavbar from "mf_navbar/MyNavbar";
import "./navbar.css";

const UserDashboard = () => {
    const location = useLocation();
    const role = location.pathname.split("/")[1];

    return (
        <div className="navbar-container">
            <MyNavbar role={role} />
            <div className="content">
                <h1>User Dashboard</h1>
                <p>Welcome to the user dashboard.</p>
            </div>
        </div>

    );
};

export default UserDashboard;
