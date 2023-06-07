/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error(error);
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <section className="login-wrapper p-5">
      <div className="container-xxl">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-8 col-sm-10">
              <div className="card">
                <div className="card-body p-4">
                  <h2 className="text-center">Forgot password</h2>
                  <p className="text-center mb-4">
                    Enter your email address to receive a reset confirmation
                  </p>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label mb-3"
                      >
                        Enter Your Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="enter email here ..."
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                      />
                    </div>
                    <div className="d-grid gap-2">
                      <button type="submit">Submit</button>
                    </div>
                  </form>
                  {message && <p className="text-center mt-4">{message}</p>}
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;