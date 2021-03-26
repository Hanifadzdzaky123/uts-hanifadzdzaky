import React from "react";

const Dashboard = (props) => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a class="navbar-brand" href="#">Navbar</a>
                </div>
            </nav>
            <div className="div">
                {props.children}
            </div>
        </div>
    )
}

export default Dashboard;