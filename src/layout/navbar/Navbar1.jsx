import React from 'react'
import { Link } from "react-router-dom";


export default function Navbar() {

   return (
        <div>
            <nav className="navbar navbar-expand-lg p-3">
                <div className="container-fluid">
                    <Link to={"/add"} className="btn btn-dark px-3 fw-bold ">
                        Add User
                    </Link>
                </div>
            </nav>
        </div>
    );

  
}
