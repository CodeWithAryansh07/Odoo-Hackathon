import React, { useState } from 'react'

const Question = ({ question }) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const [votes, setVotes] = useState(question.votes || 0)
    const [userVote, setUserVote] = useState(null) // 'up', 'down', or null
    const isAnswered = !!question.answer

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded)
    }

    const handleVote = (voteType) => {
        if (userVote === voteType) {
            // Remove vote
            setVotes(votes - (voteType === 'up' ? 1 : -1))
            setUserVote(null)
        } else {
            // Add or change vote
            const voteChange = voteType === 'up' ? 1 : -1
            const previousVoteChange = userVote === 'up' ? -1 : userVote === 'down' ? 1 : 0
            setVotes(votes + voteChange + previousVoteChange)
            setUserVote(voteType)
        }
    }

    return (
        <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-xl overflow-hidden transition-all duration-300 hover:bg-slate-800/70 hover:border-slate-600/50 hover:shadow-lg hover:shadow-slate-900/20">
            {/* Question Header */}
            <div className="p-6 pb-4">
                <div className="flex items-start gap-4">
                    {/* Voting Section */}
                    <div className="flex flex-col items-center gap-1 min-w-[50px]">
                        <button
                            onClick={() => handleVote('up')}
                            className={`p-2 rounded-lg transition-all duration-200 hover:scale-110 ${
                                userVote === 'up' 
                                    ? 'bg-green-600/30 text-green-400' 
                                    : 'bg-slate-700/50 text-slate-400 hover:bg-slate-600/50 hover:text-green-400'
                            }`}
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 4l8 8H4l8-8z"/>
                            </svg>
                        </button>
                        <span className={`text-lg font-bold ${votes > 0 ? 'text-green-400' : votes < 0 ? 'text-red-400' : 'text-slate-400'}`}>
                            {votes}
                        </span>
                        <button
                            onClick={() => handleVote('down')}
                            className={`p-2 rounded-lg transition-all duration-200 hover:scale-110 ${
                                userVote === 'down' 
                                    ? 'bg-red-600/30 text-red-400' 
                                    : 'bg-slate-700/50 text-slate-400 hover:bg-slate-600/50 hover:text-red-400'
                            }`}
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 20l-8-8h16l-8 8z"/>
                            </svg>
                        </button>
                    </div>

                    {/* Question Content */}
                    <div className="flex-1">
                        <div 
                            className="cursor-pointer"
                            onClick={toggleExpanded}
                        >
                            <h3 className="text-xl font-semibold text-slate-100 mb-3 hover:text-blue-400 transition-colors duration-200">
                                {question.question}
                            </h3>
                            
                            {/* Meta Information */}
                            <div className="flex items-center gap-4 text-sm text-slate-400 mb-3">
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                    isAnswered 
                                        ? 'bg-green-600/20 text-green-400' 
                                        : 'bg-yellow-600/20 text-yellow-400'
                                }`}>
                                    {isAnswered ? '✓ Answered' : '⏳ Pending'}
                                </span>
                                <span className="flex items-center gap-1">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    2 hours ago
                                </span>
                                <span className="flex items-center gap-1">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    Anonymous User
                                </span>
                            </div>

                            {/* Tags */}
                            <div className="flex items-center gap-2 mb-3">
                                <span className="px-2 py-1 bg-blue-600/20 text-blue-400 rounded text-xs">odoo</span>
                                <span className="px-2 py-1 bg-purple-600/20 text-purple-400 rounded text-xs">business</span>
                                <span className="px-2 py-1 bg-green-600/20 text-green-400 rounded text-xs">software</span>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-3">
                            <button
                                onClick={toggleExpanded}
                                className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 hover:text-white rounded-lg transition-all duration-200 text-sm"
                            >
                                <svg className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                                {isExpanded ? 'Hide Answer' : 'View Answer'}
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 hover:text-blue-300 rounded-lg transition-all duration-200 text-sm">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.001 8.001 0 01-7.227-4.615 5.982 5.982 0 010-6.77A8.001 8.001 0 0121 12z" />
                                </svg>
                                Answer
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 bg-slate-700/30 hover:bg-slate-600/30 text-slate-400 hover:text-slate-300 rounded-lg transition-all duration-200 text-sm">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Answer Section */}
            <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 pb-6">
                    <div className="border-t border-slate-700/50 pt-4">
                        {question.answer ? (
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-green-600/20 rounded-lg">
                                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-3">
                                        <h4 className="text-lg font-medium text-green-400">Best Answer</h4>
                                        <div className="flex items-center gap-2 text-sm text-slate-400">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                            Expert User
                                        </div>
                                    </div>
                                    <p className="text-slate-200 leading-relaxed text-base">
                                        {question.answer}
                                    </p>
                                    <div className="flex items-center gap-4 mt-4 text-sm text-slate-400">
                                        <span>Answered 1 hour ago</span>
                                        <button className="hover:text-blue-400 transition-colors">Reply</button>
                                        <button className="hover:text-green-400 transition-colors">Helpful</button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="text-center py-8 text-slate-400">
                                <svg className="w-12 h-12 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="text-lg mb-2">No answers yet</p>
                                <p className="text-sm">Be the first to answer this question!</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Question
