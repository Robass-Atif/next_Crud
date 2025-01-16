import React from 'react';

const LoginForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="flex flex-col items-center gap-4 w-full max-w-xs bg-white p-6 rounded-lg shadow-lg">
        {/* SIgn Up */}

        <h1 className="text-2xl font-semibold text-gray-800">Sign Up</h1>


        
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="name" className="text-green-600 font-semibold self-start">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="rounded-lg p-4 w-full border-none flex items-center gap-2 bg-gray-300 outline outline-2 outline-gray-500 focus:outline-green-600"
          />
        </div>


        <div className="w-full flex flex-col gap-2">
          <label htmlFor="email" className="text-green-600 font-semibold self-start">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="rounded-lg p-4 w-full border-none flex items-center gap-2 bg-gray-300 outline outline-2 outline-gray-500 focus:outline-green-600"
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="password" className="text-green-600 font-semibold self-start">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="rounded-lg p-4 w-full border-none flex items-center gap-2 bg-gray-300 outline outline-2 outline-gray-500 focus:outline-green-600"
          />
        </div>
        <div className="self-end">
          <a href="#" className="text-gray-500">
            Forgot password?
          </a>
        </div>
        <input
          type="submit"
          value="Log in"
          className="p-4 w-full flex items-center gap-2 rounded-full bg-gray-500 text-gray-200 border-none cursor-pointer transition-all duration-300 font-semibold text-sm hover:bg-green-600 hover:text-gray-500"
        />
        <div className="text-gray-500">
          Don't have an account? <a href="#" className="text-green-600">Sign up</a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
