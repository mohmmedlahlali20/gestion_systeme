export default function Login() {
    return (
      <div className="min-h-screen bg-gradient-to-r from-teal-500 to-teal-800 flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-center text-teal-700 mb-6">
              Welcome to EVENTO 2
            </h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 focus:outline-none"
                  placeholder="Enter your email"
                  required
                />
              </div>
  
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 focus:outline-none"
                  placeholder="Enter your password"
                  required
                />
              </div>
  
              <button
                type="submit"
                className="w-full bg-teal-600 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-teal-700 transition duration-300"
              >
                Sign In
              </button>
            </form>
  
            <div className="mt-4 text-center">
              <a
                href="/forgot-password"
                className="text-sm text-teal-600 hover:text-teal-800"
              >
                I have an account
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  