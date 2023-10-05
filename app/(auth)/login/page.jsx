import Image from 'next/image';
import Link from 'next/link';

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center md:flex-row md:h-screen bg-indigo-100">
      <div className="hidden md:flex md:w-1/2">
        <Image src="/images/demo-card.jpeg" alt="Login Image" width={800} height={600} />
      </div>
      <div className="w-full max-w-md p-6 space-y-6 bg-white rounded-lg shadow-md md:w-1/2">
        <h1 className="text-3xl font-bold text-center text-indigo-600">Welcome back!</h1>
        <p className="text-gray-600 text-center">Please sign in to your account.</p>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700">Email address</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-3 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:border-indigo-700"
            >
              Sign In
            </button>
          </div>
        </form>
        <p className="text-center text-gray-600">
          Don't have an account?{' '}
          <Link href="/register">Register</Link> {/* Link to your registration page */}
        </p>
      </div>
    </div>
  );
}
