"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Register() {
  return (
    <div className="flex flex-col md:flex-row items-center md:h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      {/* Background Color Container */}
      <div className="w-full md:w-1/2">
        <Image
          src="/images/demo-card.jpeg"
          className="align-center rounded-xl"
          alt="Registration Image"
          width={700}
          height={300}
        />
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div className="w-full max-w-md space-y-8 bg-white p-6 rounded-lg shadow-md">
          <div>
            <h1 className="text-2xl font-bold">Create an Account</h1>
            <p className="mt-2 text-gray-600">
              Please fill out the following information to register.
            </p>
          </div>
          <form className="mt-8 space-y-6">
            <div>
              <label htmlFor="name" className="block font-bold text-gray-700">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your full name"
                className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-bold text-gray-700">
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block font-bold text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-3 font-bold text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700"
              >
                Register
              </button>
            </div>
          </form>
          <p className="text-gray-600 text-center">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-600 hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
