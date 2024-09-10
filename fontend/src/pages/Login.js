import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and register
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(''); // Error message state
  const [successMessage, setSuccessMessage] = useState(''); // Success message state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error state
    setSuccessMessage(''); // Reset success message

    const endpoint = isLogin ? '/login' : '/register';
    const payload = isLogin
      ? { username, password }
      : { username, email, password };

    try {
      const response = await fetch(`http://localhost:5000${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        if (isLogin) {
          setSuccessMessage('Login successful!');
          localStorage.setItem('token', data.token); // Store JWT token in local storage
          // Redirect to home or dashboard page
          window.location.href = '/'; // Redirect to homepage or protected route
        } else {
          setSuccessMessage('Registration successful! Please log in.');
          setIsLogin(true);
        }
      } else {
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Network error. Please check your connection.');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>{isLogin ? 'Login' : 'Register'}</h2>

        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}

        {!isLogin && (
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        )}

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">{isLogin ? 'Login' : 'Register'}</button>

        <p onClick={() => setIsLogin(!isLogin)} className="toggle-link">
          {isLogin
            ? "Don't have an account? Register here"
            : 'Already have an account? Login here'}
        </p>
      </form>
    </div>
  );
};

export default Login;
