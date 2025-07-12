import React from 'react'
import Question from './Question'
import { questions } from '../constants'
import { useNavigate } from 'react-router-dom'

const Questionnaire = () => {
    // Filter to show only answered questions on the main page
    const answeredQuestions = questions.filter(q => q.answer)

    const navigate = useNavigate();

    const handleBrowseAllQuestions = () => {
        navigate('/questions');
    }

    return (
        <div className="max-w-6xl mx-auto px-6 py-12">
            {/* Hero Section - Enhanced 2D Design */}
            <div className="relative text-center mb-16 overflow-hidden">
                {/* Background Decorative Elements */}
                <div className="absolute inset-0 opacity-30">
                    {/* Floating Question Marks */}
                    <div className="absolute top-10 left-10 text-6xl text-blue-400/20 animate-pulse">?</div>
                    <div className="absolute top-32 right-16 text-4xl text-purple-400/20 animate-bounce">?</div>
                    <div className="absolute bottom-20 left-20 text-5xl text-pink-400/20 animate-pulse">?</div>
                    
                    {/* Geometric Shapes */}
                    <div className="absolute top-16 right-32 w-16 h-16 border-2 border-blue-400/20 rotate-45 animate-spin-slow"></div>
                    <div className="absolute bottom-32 right-24 w-12 h-12 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full animate-bounce"></div>
                    <div className="absolute top-40 left-32 w-8 h-8 bg-gradient-to-br from-blue-400/20 to-purple-400/20 transform rotate-12 animate-pulse"></div>
                </div>

                {/* Main Content */}
                <div className="relative z-10">
                    <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-8 animate-fade-in">
                        StackIt Q&A
                    </h1>
                    
                    {/* Subtitle with Icons */}
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-blue-400"></div>
                        <svg className="w-6 h-6 text-blue-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                        <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-purple-400"></div>
                    </div>
                    
                    <p className="text-slate-300 text-xl md:text-2xl max-w-4xl mx-auto mb-6 leading-relaxed">
                        Get instant answers to your questions from our expert community.
                    </p>
                    <p className="text-slate-400 text-lg max-w-3xl mx-auto mb-12">
                        Join thousands of developers, business professionals, and tech enthusiasts sharing knowledge.
                    </p>
                </div>
                
                {/* Enhanced CTA Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
                    <button className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-blue-500/30 hover:scale-105 font-semibold text-lg overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-white/20 to-blue-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                        <svg className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        Ask a Question
                    </button>
                    <button className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-slate-800/50 hover:bg-slate-700/70 backdrop-blur-md border border-slate-600/50 hover:border-slate-500/70 text-slate-200 hover:text-white rounded-2xl transition-all duration-300 shadow-xl hover:shadow-slate-500/20 hover:scale-105 font-semibold text-lg overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-400/0 via-white/10 to-slate-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                        <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        Browse All Questions
                    </button>
                </div>

                {/* Enhanced Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                    <div className="group relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-md border border-slate-700/30 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300 hover:scale-105 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative">
                            <div className="flex items-center justify-center mb-3">
                                <svg className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className="text-3xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">{questions.length}</div>
                            <div className="text-slate-400 font-medium">Total Questions</div>
                        </div>
                    </div>
                    
                    <div className="group relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-md border border-slate-700/30 rounded-2xl p-6 hover:border-green-500/30 transition-all duration-300 hover:scale-105 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative">
                            <div className="flex items-center justify-center mb-3">
                                <svg className="w-8 h-8 text-green-400 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className="text-3xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">{answeredQuestions.length}</div>
                            <div className="text-slate-400 font-medium">Answered</div>
                        </div>
                    </div>
                    
                    <div className="group relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-md border border-slate-700/30 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300 hover:scale-105 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative">
                            <div className="flex items-center justify-center mb-3">
                                <svg className="w-8 h-8 text-purple-400 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className="text-3xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
                            <div className="text-slate-400 font-medium">Support</div>
                        </div>
                    </div>
                    
                    <div className="group relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-md border border-slate-700/30 rounded-2xl p-6 hover:border-yellow-500/30 transition-all duration-300 hover:scale-105 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative">
                            <div className="flex items-center justify-center mb-3">
                                <svg className="w-8 h-8 text-yellow-400 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <div className="text-3xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
                            <div className="text-slate-400 font-medium">Active Users</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Answered Questions Section */}
            <div className="mb-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-100 mb-2">Latest Answered Questions</h2>
                        <p className="text-slate-400 text-lg">Discover solutions from our expert community</p>
                    </div>
                    
                    <div className="flex items-center gap-4">
                        {/* Sort Options */}
                        <div className="flex items-center gap-3">
                            <span className="text-slate-400 font-medium">Sort by:</span>
                            <select className="bg-slate-800/50 backdrop-blur-md text-slate-200 border border-slate-600/50 hover:border-slate-500/70 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200">
                                <option>Most Recent</option>
                                <option>Most Voted</option>
                                <option>Most Helpful</option>
                                <option>Oldest First</option>
                            </select>
                        </div>
                        
                        {/* Browse All Questions Button */}
                        <button className="cursor-pointer flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 hover:from-purple-600/30 hover:to-blue-600/30 backdrop-blur-md border border-purple-500/30 hover:border-purple-400/50 text-purple-300 hover:text-purple-200 rounded-xl transition-all duration-200 font-medium" onClick={handleBrowseAllQuestions}>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            Browse All Questions
                        </button>
                    </div>
                </div>

                {/* Questions List */}
                <div className="space-y-8">
                    {answeredQuestions.length > 0 ? (
                        answeredQuestions.slice(0, 6).map((question) => (
                            <Question key={question.id} question={question} />
                        ))
                    ) : (
                        <div className="text-center py-16">
                            <div className="w-24 h-24 mx-auto mb-6 bg-slate-800/50 rounded-full flex items-center justify-center">
                                <svg className="w-12 h-12 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-semibold text-slate-300 mb-3">No answered questions yet</h3>
                            <p className="text-slate-400 text-lg mb-6">Be the first to contribute to our knowledge base!</p>
                            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors duration-200">
                                Ask the First Question
                            </button>
                        </div>
                    )}
                </div>

                {/* Show More Button */}
                {answeredQuestions.length > 6 && (
                    <div className="text-center mt-12">
                        <button className="px-10 py-4 bg-slate-800/50 hover:bg-slate-700/70 backdrop-blur-md border border-slate-600/50 hover:border-slate-500/70 text-slate-200 hover:text-white rounded-2xl transition-all duration-300 shadow-xl hover:shadow-slate-500/20 hover:scale-105 font-semibold text-lg">
                            View More Answered Questions
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Questionnaire