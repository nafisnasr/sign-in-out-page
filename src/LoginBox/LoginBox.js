import React from 'react'
import "./LoginBox.css"
import QuestionBox from '../QuestionBox/QuestionBox'


export default function LoginBox() {
    return (
        <QuestionBox dir="ltr" btnTitle="ایجاد حساب کاربری" btnLink="/register">
            <div className="login-box">
                <div className="login-wrapper">

                    <h3 className="title">ورود</h3>

                    <div className="input-container my-3">

                        <div className="form-floating mb-3">
                            <input type="email" className="px-2 form-control fs-13px h-45px" id="emailAddress" placeholder="ایمیل یا نام کاربری" />
                            <label className='input-label' for="emailAddress">نام کاربری یا آدرس ایمیل</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input type="password" className="form-control fs-13px h-45px" id="emailAddress" placeholder="ایمیل یا نام کاربری" />
                            <label className='input-label' for="emailAddress" >پسوورد</label>
                        </div>

                        <div className="form-check mt-4 mb-2">
                            <input className="form-check-input" type="checkbox" value="" id="rememberMe" />
                            <label className="form-check-label" for="rememberMe">
                                مرا بخاطر بسپار
                            </label>
                        </div>

                        <div className="btn-box">
                            <button className="forget-password">آیا رمز عبور خود را فراموش کردید؟</button>
                            <input type="submit" className='submit-btn' value='ورود' />
                        </div>
                    </div>
                </div>
            </div>
        </QuestionBox>

    )
}
