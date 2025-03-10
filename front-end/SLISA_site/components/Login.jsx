import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ users, setLoggedIn, loggedIn, setCurrentUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      setLoggedIn(true);
      setCurrentUser(user);
      navigate('/profile')
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 text-center mb-12">
          Login
        </h1>
        <form className="bg-gray-50 p-6 rounded-lg shadow-md max-w-2xl mx-auto" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
            <input type="email" id="email" value={email} className="w-full p-2 border rounded-lg" required
              placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 mb-1">Password</label>
            <input type="password" id="password" value={password} className="w-full p-2 border rounded-lg" required
              placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="w-full px-4 py-2 bg-green-800 text-white rounded-lg hover:bg-green-700">
            Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;