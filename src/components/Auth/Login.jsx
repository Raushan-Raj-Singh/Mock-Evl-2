import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../redux/actions';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const errorMessage = useSelector(state => state.errorMessage);
  
    const handleLogin = (e) => {
      e.preventDefault();
      dispatch(login({ email, password }, navigate));
    };
  return (
    <div className="login">
    <h4>Login</h4>
    {errorMessage && <p className="error">{errorMessage}</p>}
    <form onSubmit={handleLogin}>
      <div className="text_area">
        <input
          type="email"
          id="email"
          name="email"
          defaultValue="username"
          className="text_input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
      </div>
      <div className="text_area">
        <input
          type="password"
          id="password"
          name="password"
          defaultValue="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="text_input"

        />
      </div>
      <input
        type="submit"
        value="Submit"
        className="btn"

      />
    </form>
    <a className="link" href="/signup">Sign Up</a>
  </div>
  )
}

export default Login