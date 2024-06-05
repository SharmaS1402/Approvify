export default function RegisterForm(){
    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100 py-16">
    <div className="bg-white p-12 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Register</h2>
        <form className="space-y-6">
            <div>
                <label htmlFor="username" className="block text-lg font-medium text-gray-700">Username</label>
                <input
                    type="text"
                    id="username"
                    className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your username"
                    required
                />
            </div>
            <div>
                <label htmlFor="password" className="block text-lg font-medium text-gray-700">Password</label>
                <input
                    type="password"
                    id="password"
                    className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your password"
                    required
                />
            </div>
            <div>
                <label htmlFor="whatsapp" className="block text-lg font-medium text-gray-700">WhatsApp Phone Number</label>
                <input
                    type="tel"
                    id="whatsapp"
                    className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your WhatsApp phone number"
                    required
                />
            </div>
            <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-6 py-3 my-6 shadow-lg transform transition-transform hover:scale-105 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Register
            </button>
        </form>
    </div>
</div>

    )
}