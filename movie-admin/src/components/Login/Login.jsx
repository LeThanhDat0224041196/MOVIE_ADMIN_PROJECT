import { message, notification } from 'antd';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { fetchLoginUserAPI } from '../../service/User/user';
import { setAccountUser } from '../../store/actions/userAction';
import { USER_ACCOUNT_KEY } from '../../store/types/type';
import './Login.scss'


export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    taiKhoan: '',
    matKhau: '',
  });
  const handleChange = (event) => {
    const {name, value} = event.target;
    setUser({
      ...user,
      [name]: value,
    })
  };
  const handleSubmit = async (event)=>{
    event.preventDefault();
    try {
      const result = await fetchLoginUserAPI(user);
      localStorage.setItem(USER_ACCOUNT_KEY, JSON.stringify(result.data.content))
      dispatch(setAccountUser(result.data.content))
      notification.success({
        message: 'Tài Khoản đăng nhập thành công',
      })
      setTimeout(()=>{
        window.location.href='/admin'
        // navigate('/admin')
      }, 1000)
    } catch (error) {
      notification.warning({
        message: 'Email hoặc mật khẩu không đúng !'
      })
    }
  }

  return (
    <div className='container'>
      <div className='login-left'>
        <div className='login-header'>
          <h1>Welcome to Login Page</h1>
          <p>Please login to access Admin Page</p>
        </div>
        <form className='login-form' onSubmit={handleSubmit}>
          <div className='login-form-content'>
            <div className='form-item'>
              <label htmlFor="user">Enter Username</label>
              <input name='taiKhoan' type="text" id='user' onChange={handleChange} />
            </div>
            <div className="form-item">
              <label htmlFor="password">Enter Password</label>
              <input name='matKhau' type="password" id='password' onChange={handleChange} />
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
                  <img width='30' src='https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png' /> Google Login
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
