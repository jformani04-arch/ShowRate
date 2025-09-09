export default function Login() {
  return (
    <>
      <form className="w-80 bg-white p-6 rounded-xl shadow-lg mx-auto flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>

        <div className="flex flex-col">
          <label className="mb-1 text-gray-600 font-medium">Username</label>
          <input
            type="text"
            className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
            placeholder="Enter username"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-gray-600 font-medium">Password</label>
          <input
            type="password"
            className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
            placeholder="Enter password"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Login
        </button>
      </form>
    </>
  );
}
