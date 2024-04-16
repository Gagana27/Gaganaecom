import React from 'react';

const SignInForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-in logic here
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light p-4">
      <form
        className="bg-white p-4 rounded shadow custom-width-60"
        onSubmit={handleSubmit}
      >
        <h2 className="text-center font-weight-bold mb-4">Sign In</h2>

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
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-block"
        >
          Sign In
        </button>
        <p className="text-right">
            New User? <a href="/signup">Sign Up</a>
          </p>
      </form>
    </div>
  );
};

export default SignInForm;
