export default function Contact() {
  return (
    <div className="min-h-screen mt-15 flex flex-col items-center py-12 px-4">
      <div className="max-w-3xl w-full bg-[#3C3D37] shadow-lg rounded-2xl p-8 text-[#ECDFCC]">
        
        {/* Header */}
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="mb-8">
          Have questions, feedback, or ideas for ShowRate? Fill out the form below and we’ll get back to you soon.
        </p>

        {/* Contact Form */}
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="mt-1 block w-full rounded-md border-gray-500 bg-transparent shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 text-[#ECDFCC] placeholder-gray-400"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="mt-1 block w-full rounded-md border-gray-500 bg-transparent shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 text-[#ECDFCC] placeholder-gray-400"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Type your message here..."
              className="mt-1 block w-full rounded-md border-gray-500 bg-transparent shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 text-[#ECDFCC] placeholder-gray-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg shadow hover:bg-indigo-700 transition duration-200"
          >
            Send Message
          </button>
        </form>

        {/* Extra Info */}
        <div className="mt-10 border-t border-gray-600 pt-6">
          <h2 className="text-lg font-semibold mb-2">Other Ways to Reach Us</h2>
          <p>Email: <a href="mailto:support@showrate.com" className="text-indigo-400">support@showrate.com</a></p>
          <p>Twitter: <a href="#" className="text-indigo-400">@ShowRate</a></p>
          <p>Discord: <a href="#" className="text-indigo-400">Join our community</a></p>
        </div>
      </div>
    </div>
  );
}
