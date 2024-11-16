import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4">
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-white mb-6">Create Account</h2>
        
        <form className="space-y-6">
          <div>
            <label className="block text-green-100 mb-2">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white"
              placeholder="Enter your full name"
            />
          </div>
          
          <div>
            <label className="block text-green-100 mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white"
              placeholder="Enter your email"
            />
          </div>
          
          <div>
            <label className="block text-green-100 mb-2">Password</label>
            <input
              type="password"
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white"
              placeholder="Create a password"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-yellow-500 text-green-900 py-3 rounded-lg font-semibold hover:bg-yellow-400"
          >
            Sign Up
          </button>
        </form>
        
        <p className="text-center text-green-100 mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-yellow-400 hover:text-yellow-300">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;