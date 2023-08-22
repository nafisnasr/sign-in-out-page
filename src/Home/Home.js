import React from 'react';
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
    return (
        <div className="main-page">
            <Link to="/register" className='register link'>ثبت نام </Link>
            <Link to="/login" className='login link'>ورود</Link>
        </div>
    )
}
