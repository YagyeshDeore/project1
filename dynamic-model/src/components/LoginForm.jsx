// Agent.jsx
import React from 'react';

const Agent = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
            {/* Header */}
            <header className="bg-white shadow-md">
                <div className="container mx-auto px-4 py-4 flex justify-center">
                    <h1 className="text-2xl font-bold text-blue-600">Welcome to Agent Portal</h1>
                </div>
            </header>

            {/* Login Section */}
            <main className="flex-grow flex items-center justify-center px-4 py-20 bg-gray-100">
                <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
                    <h2 className="text-xl font-bold mb-6 text-gray-800">Agent Login</h2>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="agentId" className="block text-sm font-medium text-gray-700">
                                Agent ID
                            </label>
                            <input
                                type="text"
                                id="agentId"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter Agent ID"
                            />
                            <p className="text-xs text-red-500 mt-1">Please enter Agent ID</p>
                            <a href="#" className="text-xs text-blue-500 hover:underline">
                                Forgot Agent ID
                            </a>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter Password"
                            />
                            <p className="text-xs text-gray-500 mt-1">Password is case sensitive</p>
                            <a href="#" className="text-xs text-blue-500 hover:underline">
                                Forgot Password
                            </a>
                        </div>
                        <div className="mb-4 flex items-center">
                            <input
                                type="checkbox"
                                id="virtualKeyboard"
                                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                            />
                            <label htmlFor="virtualKeyboard" className="ml-2 text-sm text-gray-700">
                                Use Virtual Keyboard for Password
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
                        >
                            LOGIN
                        </button>
                    </form>
                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-700">
                            Need Help?{' '}
                            <a href="#" className="text-blue-500 hover:underline">
                                Contact Support
                            </a>
                        </p>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-blue-600 text-white mt-auto">
                <div className="container mx-auto px-4 py-6 text-center text-sm">
                    ©Copyright Imperacred Bank Ltd.{' '}
                    <a href="#" className="text-white underline">
                        Terms and Condition
                    </a>{' '}
                    |{' '}
                    <a href="#" className="text-white underline">
                        Privacy Policy
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default Agent;
