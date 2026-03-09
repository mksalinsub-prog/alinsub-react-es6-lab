import React, { useState } from 'react';
import './App.css'; // We'll add styling here

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple login check (for demo)
    if (email === 'admin@skyline.com' && password === 'password') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };

  if (isLoggedIn) {
    return (
      <div className="welcome-container">
        <h1>Welcome, {email}!</h1>
        <p>You are now logged in 🚀</p>
      </div>
    );
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h1>Alinsub's Login Form</h1>
        <p>Enter your credentials to continue</p>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;