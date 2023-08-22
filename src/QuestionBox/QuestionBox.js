import React from 'react'
import { Link } from "react-router-dom"
import "./QuestionBox.css"

export default function QuestionBox({ btnTitle, btnLink, children, dir }) {
    return (
        <>
            <div className='question-box' dir={dir}>
                <div className="question-box-wrapper">
                    <div className="question-text-wrapper">
                        <h3 className='title'>آیا حساب کاربری دارید؟</h3>
                        <Link to={btnLink} className="register-btn link">{btnTitle}</Link>
                    </div>
                </div>
                {children}
            </div>
        </>
    )
}
