import React, { useState } from 'react';
// import { authenticate, isAuth } from '../../helper/auth';

export default function AdminLogin(props) {
  const [email, setEmail] = useState('admin@missvalentineinnerwear.com');
  const [password, setPassword] = useState('Vikasjain@2021');

  const changeHandler = (event) => {
    event.target.name === 'email'
      ? setEmail(event.target.value)
      : setPassword(event.target.value);
  };

  const submitHandler = () => {
    // httpRequest({
    //   method: 'post',
    //   url: '/auth/signin',
    //   data: {
    //     email: email,
    //     password: password,
    //   },
    // }).then((res) => {
    //   if (res.data) {
    //     authenticate(res);
    //     // history.push()
    //     props.history.push('/admin/dashboard');
    //   }
    // });
  };
  // if (isAuth()) return <Redirect to="/admin/dashboard" />;
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
