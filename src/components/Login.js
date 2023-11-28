import axios from 'axios';
import { useState } from 'react';
import {useNavigate } from 'react-router-dom';


export default function Login() {

  debugger;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const loginDto = {
    email: email,
    password: password
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);
    axios.post('http://localhost:8483/api/user/signin',  loginDto )
      .then((Response) => {
        if (Response.status === 200) {
          const userId=Response.data.userId;
          
          console.log("userId"+userId) 
          sessionStorage.setItem('userId', userId);
          navigate('/combinedquotes');
        } else {
          console.log("in else")
        }
      })
      .catch((error) => {
        // Handle error
      });
  };

  return (
    <>
      <section className="vh-100" style={{ backgroundColor: 'white' }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
                <div className="card-body p-5 text-center">
                  <h3 className="mb-5">Sign in</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="typeEmailX-2"
                        className="form-control form-control-lg"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="typePasswordX-2"
                        className="form-control form-control-lg"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                      />
                    </div>
                    <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
