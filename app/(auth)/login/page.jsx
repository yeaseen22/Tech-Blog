"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { loginAction } from "@/redux/actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { getCookie } from "@/utils/cookieUtils";
import {Button} from "@nextui-org/react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function Login() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [data, setData] = useState({
    nameOrEmail: "",
    password: "",
  });

  // from Redux Store..
  const { loading, success, message } = useSelector((state) => state.user);
  const user = getCookie("authToken");

  useEffect(() => {
    if (user) {
      toast.success('user already authenticated')
      router.push("/");
    }
  }, [user]);

  // Tracking the error from store..
  useEffect(() => {
    if (!success && message) {
      toast.error(message);
    }

    if (success && user) {
      toast.success('Login successful', message)
      router.push("/");
    }
  }, [success]);

  /**
   * Handle value when change the input
   * @param {*} event
   */
  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  /**
   * Handle submit button
   * @param {*} event
   */
  const handleSubmitLogin = (event) => {
    event.preventDefault();
    dispatch(loginAction(data));
  };

  return (
    <div className="flex flex-col items-center justify-center md:flex-row md:h-screen bg-indigo-100">
          <ToastContainer position="top-right" autoClose={5000} />
      <div className="hidden md:flex md:w-1/2">
        <Image
          src="/images/demo-card.jpeg"
          alt="Login Image"
          width={800}
          height={600}
        />
      </div>

      <div className="w-full max-w-md p-6 space-y-6 bg-white rounded-lg shadow-md md:w-1/2">
        <h1 className="text-3xl font-bold text-center text-indigo-600">
          Welcome back!
        </h1>
        <p className="text-gray-600 text-center">
          Please sign in to your account.
        </p>

        <form className="space-y-4" onSubmit={handleSubmitLogin}>
          {/* ===== Email Or Name ==== */}
          <div>
            <label htmlFor="email" className="block text-gray-700">
              Email address
            </label>
            <input
              id="email"
              type="text"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring focus:border-indigo-500"
              required
              name="nameOrEmail"
              onChange={handleChange}
            />
          </div>

          {/* ==== Password ==== */}
          <div>
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring focus:border-indigo-500"
              required
              name="password"
              onChange={handleChange}
            />
          </div>

          <div>
            {/* <button
              type="submit"
              className="w-full px-4 py-3 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:border-indigo-700"
              disabled={loading}
            >x
              {!loading ? 'Sign In' : 'Loading..'}
            </button> */}
            <Button color="primary" isLoading={loading} type="submit" className="w-full">
              SignIn
            </Button>
          </div>
        </form>

        <p className="text-center text-gray-600">
          Don't have an account? <Link href="/register">Register</Link>{" "}
          {/* Link to your registration page */}
        </p>
      </div>
    </div>
  );
}
