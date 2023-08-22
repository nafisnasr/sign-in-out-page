import React from 'react'
import "./RegisterBox.css"
import QuestionBox from '../QuestionBox/QuestionBox'


export default function RegisterBox() {
  return (
    <QuestionBox dir="rtl" btnTitle="ورود به حساب" btnLink="/login">

      <div className='register-box'>
        <div className="register-wrapper">

          <h3 className="title">ثبت نام</h3>

          <div className="input-container">

            <div className="form-floating mb-3">
              <input type="text" className="px-2 form-control fs-13px h-45px" id="username" placeholder="نام کاربری" />
              <label className='input-label' for="username">نام کاربری </label>
            </div>

            <div className="form-floating mb-3">
              <input type="email" className="px-2 form-control fs-13px h-45px" id="emailAddress" placeholder="ایمیل یا نام کاربری" />
              <label className='input-label' for="emailAddress">آدرس ایمیل</label>
            </div>

            <div className="form-floating mb-3">
              <input type="password" className="form-control fs-13px h-45px" id="password" placeholder="پسوورد" />
              <label className='input-label' for="password" >پسوورد</label>
            </div>

            <div className="form-floating mb-3">
              <input type="password" className="form-control fs-13px h-45px" id="confirmPassword" placeholder="تکرار پسوورد" />
              <label className='input-label' for="confirmPassword" > تکرار پسوورد</label>
            </div>

            <div className="btn-box">
              <input type="submit" className='submit-btn' value='ثبت نام' />
            </div>
          </div>
        </div>
      </div>
    </QuestionBox>
  )
}
