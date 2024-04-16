import React, { useState } from 'react';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic
    if (!/^[A-Z][a-zA-Z]*$/.test(formData.username)) {
      setError('Username should start with a capital letter');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Invalid email format');
      return;
    }

    if (formData.password.length < 8 || !/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)) {
      setError('Password should be at least 8 characters long and contain a special character');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // If all validations pass, you can proceed with the form submission logic here

    setError(''); // Clear any previous error messages
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="d-flex align-items-center justify-content-center p-4 bg-light">
      <form
        className="bg-white p-4 rounded  custom-width-60"
        onSubmit={handleSubmit}
      >
        <h2 className="text-center font-weight-bold mb-4">Sign Up</h2>

        <div className="mb-4">
          <label htmlFor="username" className="form-label">
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="form-control"
            required
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            required
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            minLength="8"
            required
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="form-control"
            minLength="8"
            required
            onChange={handleChange}
          />
        </div>

        {error && <p className="text-danger mb-4">{error}</p>}

        <button
          type="submit"
          className="btn btn-primary btn-block"
        >
          Sign Up
        </button>
        <p className="text-right">
          Already registered? <a href="/signin">Sign in</a>
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;
