import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../redux/actions/auth';
export default function AdminLogin(props) {
  const [email, setEmail] = useState('admin@missvalentineinnerwear.com');
  const [password, setPassword] = useState('Vikasjain@2021');
  const dispatch = useDispatch();
  const router = useRouter();
  const changeHandler = (event) => {
    event.target.name === 'email'
      ? setEmail(event.target.value)
      : setPassword(event.target.value);
  };

  const auth = useSelector((s) => s.auth);
  const submitHandler = () => {
    dispatch(
      signIn({
        email: email,
        password: password,
      })
    );
  };

  useEffect(() => {
    console.log('auth', auth);
    if (auth.token) router.push('/admin/dashboard');
  }, [auth.token]);

  if (auth.token) router.push('/admin/dashboard');

  return (
    <div>
      <div className="auth-wrapper">
        <div className="auth-content">
          <div className="auth-bg">
            <span className="r" />
            <span className="r s" />
            <span className="r s" />
            <span className="r" />
          </div>
          <div className="card">
            <div className="card-body text-center">
              <div className="mb-4">
                <i className="feather icon-user-plus auth-icon" />
              </div>
              <h3 className="mb-4">Login</h3>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  onChange={changeHandler}
                  value={email}
                />
              </div>
              <div className="input-group mb-4">
                <input
                  type="password"
                  className="form-control"
                  placeholder="password"
                  name="password"
                  value={password}
                  onChange={changeHandler}
                />
              </div>
              <button
                className="btn btn-primary shadow-2 mb-4"
                onClick={submitHandler}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
