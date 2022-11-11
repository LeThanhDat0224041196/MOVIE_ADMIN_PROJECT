import React from 'react'
import './Login.scss'


export default function Login() {
  return (
    <div className='container'>
      <div className='login-left'>
        <div className='login-header'>
          <h1>Welcome to Login Page</h1>
          <p>Please login to access Admin Page</p>
        </div>
        <form className='login-form'>
          <div className='login-form-content'>
            <div className='form-item'>
              <label htmlFor="email">Enter Email</label>
              <input type="text" id='email' />
            </div>
            <div className="form-item">
              <label htmlFor="password">Enter Password</label>
              <input type="password" id='password' />
            </div>
            <div className="form-item">
              <div className='checkbox'>
                <input type="checkbox" id='remeberMeCheckBox'/>
                <label htmlFor="remembeMeCheckBox" className='checkboxLabel'>Remember Me</label>
              </div>
            </div>
            <button type='submit'>Sign In</button>
          </div>
          <div className='login-form-footer'>
                <a href='#'>
                  <img width='30' src='https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png' /> Facebook Login
                </a>
                <a href='#'>
                  <img width='30' src='https://banner2.cleanpng.com/20180612/llj/kisspng-google-logo-google-search-google-doodle-circular-economy-5b2082fe438318.3928951115288573422766.jpg' /> Google Login
                </a>
          </div>
        </form>
      </div>
      <div className='login-right'>
            <img src='https://uploads-ssl.webflow.com/5fffd207e6428d82b1dff833/60181421a6e88f75ef72a9aa_undraw_true_friends_c94g.svg'></img>
      </div>
    </div>
  )
}
