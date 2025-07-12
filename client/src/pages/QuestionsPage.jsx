import React, { useState } from 'react'
import Question from '../components/Question'
import { questions } from '../constants'

const QuestionsPage = () => {
    const [activeFilter, setActiveFilter] = useState('all')
    const [sortBy, setSortBy] = useState('latest')

    // Filter questions based on active filter
    const getFilteredQuestions = () => {
        switch (activeFilter) {
            case 'answered':
                return questions.filter(q => q.answer)
            case 'unanswered':
                return questions.filter(q => !q.answer)
            case 'recent':
                return questions.slice(0, 10) // Mock recent questions
            default:
                return questions
        }
    }

    const filteredQuestions = getFilteredQuestions()

    return (
        <div className="max-w-6xl mx-auto px-6 py-8">
            {/* Page Header */}
            <div className="mb-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                    <div>
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                            All Questions
                        </h1>
                        <p className="text-slate-400 text-lg">
                            Browse through all questions in our community. Find answers or contribute your knowledge.
                        </p>
                    </div>
                    
                    <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl transition-all duration-200 shadow-lg hover:shadow-blue-500/25 hover:scale-105 font-medium">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        Ask New Question
                    </button>
                </div>

                {/* Stats Bar */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/30 rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-blue-400 mb-1">{questions.length}</div>
                        <div className="text-slate-400 text-sm">Total Questions</div>
                    </div>
                    <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/30 rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-green-400 mb-1">{questions.filter(q => q.answer).length}</div>
                        <div className="text-slate-400 text-sm">Answered</div>
                    </div>
                    <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/30 rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-yellow-400 mb-1">{questions.filter(q => !q.answer).length}</div>
                        <div className="text-slate-400 text-sm">Unanswered</div>
                    </div>
                    <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/30 rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-purple-400 mb-1">24h</div>
                        <div className="text-slate-400 text-sm">Response Time</div>
                    </div>
                </div>
            </div>

            {/* Filters and Sorting */}
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-8 p-6 bg-slate-800/30 backdrop-blur-md border border-slate-700/50 rounded-2xl">
                <div className="flex flex-wrap items-center gap-3">
                    <span className="text-slate-300 font-semibold">Filter by:</span>
                    <button 
                        onClick={() => setActiveFilter('all')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                            activeFilter === 'all' 
                                ? 'bg-blue-600/30 text-blue-400 border border-blue-500/50' 
                                : 'bg-slate-700/30 text-slate-400 hover:bg-slate-600/30 hover:text-slate-300'
                        }`}
                    >
                        All ({questions.length})
                    </button>
                    <button 
                        onClick={() => setActiveFilter('answered')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                            activeFilter === 'answered' 
                                ? 'bg-green-600/30 text-green-400 border border-green-500/50' 
                                : 'bg-slate-700/30 text-slate-400 hover:bg-slate-600/30 hover:text-slate-300'
                        }`}
                    >
                        Answered ({questions.filter(q => q.answer).length})
                    </button>
                    <button 
                        onClick={() => setActiveFilter('unanswered')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                            activeFilter === 'unanswered' 
                                ? 'bg-yellow-600/30 text-yellow-400 border border-yellow-500/50' 
                                : 'bg-slate-700/30 text-slate-400 hover:bg-slate-600/30 hover:text-slate-300'
                        }`}
                    >
                        Unanswered ({questions.filter(q => !q.answer).length})
                    </button>
                    <button 
                        onClick={() => setActiveFilter('recent')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                            activeFilter === 'recent' 
                                ? 'bg-purple-600/30 text-purple-400 border border-purple-500/50' 
                                : 'bg-slate-700/30 text-slate-400 hover:bg-slate-600/30 hover:text-slate-300'
                        }`}
                    >
                        Recent
                    </button>
                </div>
                
                <div className="flex items-center gap-3">
                    <span className="text-slate-300 font-semibold">Sort by:</span>
                    <select 
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="bg-slate-800/50 backdrop-blur-md text-slate-200 border border-slate-600/50 hover:border-slate-500/70 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200"
                    >
                        <option value="latest">Latest First</option>
                        <option value="oldest">Oldest First</option>
                        <option value="most-voted">Most Voted</option>
                        <option value="most-answered">Most Answered</option>
                        <option value="trending">Trending</option>
                    </select>
                </div>
            </div>

            {/* Questions List */}
            <div className="space-y-6">
                {filteredQuestions.length > 0 ? (
                    filteredQuestions.map((question) => (
                        <Question key={question.id} question={question} />
                    ))
                ) : (
                    <div className="text-center py-20">
                        <div className="w-32 h-32 mx-auto mb-8 bg-slate-800/50 rounded-full flex items-center justify-center">
                            <svg className="w-16 h-16 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-3xl font-semibold text-slate-300 mb-4">No questions found</h3>
                        <p className="text-slate-400 text-lg mb-8">No questions match your current filter. Try adjusting your search criteria.</p>
                        <div className="flex justify-center gap-4">
                            <button 
                                onClick={() => setActiveFilter('all')}
                                className="px-6 py-3 bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 hover:text-white rounded-xl transition-all duration-200"
                            >
                                View All Questions
                            </button>
                            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors duration-200">
                                Ask a Question
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Pagination */}
            {filteredQuestions.length > 0 && (
                <div className="flex justify-center items-center gap-4 mt-16">
                    <button className="px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 text-slate-400 hover:text-slate-200 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed">
                        Previous
                    </button>
                    <div className="flex items-center gap-2">
                        <button className="w-10 h-10 bg-blue-600 text-white rounded-lg font-medium">1</button>
                        <button className="w-10 h-10 bg-slate-700/50 hover:bg-slate-600/50 text-slate-400 hover:text-slate-200 rounded-lg transition-all duration-200">2</button>
                        <button className="w-10 h-10 bg-slate-700/50 hover:bg-slate-600/50 text-slate-400 hover:text-slate-200 rounded-lg transition-all duration-200">3</button>
                        <span className="text-slate-500 px-2">...</span>
                        <button className="w-10 h-10 bg-slate-700/50 hover:bg-slate-600/50 text-slate-400 hover:text-slate-200 rounded-lg transition-all duration-200">10</button>
                    </div>
                    <button className="px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 text-slate-400 hover:text-slate-200 rounded-lg transition-all duration-200">
                        Next
                    </button>
                </div>
            )}
        </div>
    )
}

export default QuestionsPage
