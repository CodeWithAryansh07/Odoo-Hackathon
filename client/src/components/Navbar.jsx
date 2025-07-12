import React, { useState } from 'react'

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(true)

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode)
        // You can add logic here to actually toggle the theme
        document.documentElement.classList.toggle('dark')
    }

    return (
        <nav className='flex w-full justify-between items-center px-6 md:px-12 py-6 bg-slate-900/50 backdrop-blur-md border-b border-slate-700/50 sticky top-0 z-50'>
            <div className='flex items-center space-x-2'>
                <div className='w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center'>
                    <span className='text-white font-bold text-sm'>S</span>
                </div>
                <span className='text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
                    StackIt
                </span>
            </div>

            <div className='flex items-center gap-3'>
                <button className='cursor-pointer flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg transition-all duration-200 shadow-lg hover:shadow-blue-500/25 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500/50'>
                    <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 4v16m8-8H4' />
                    </svg>
                    <span className='hidden sm:inline font-medium'>Add Question</span>
                </button>

                <button 
                    onClick={toggleTheme}
                    className='p-2.5 cursor-pointer bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg transition-all duration-200 shadow-lg hover:shadow-slate-500/25 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-500/50'
                    title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                >
                    {isDarkMode ? (
                        <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z' />
                        </svg>
                    ) : (
                        <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z' />
                        </svg>
                    )}
                </button>

                <button className='cursor-pointer flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-lg transition-all duration-200 shadow-lg hover:shadow-purple-500/25 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500/50 font-medium'>
                    <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1' />
                    </svg>
                    <span>Login</span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar