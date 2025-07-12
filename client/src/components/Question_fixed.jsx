import React, { useState } from 'react'

const Question = ({ question }) => {
    const [isExpanded, setIsExpanded] = useState(false)

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded)
    }

    return (
        <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-xl p-6 mb-4 transition-all duration-300 hover:bg-slate-800/70 hover:border-slate-600/50">
            {/* Question Header */}
            <div 
                className="flex justify-between items-start cursor-pointer"
                onClick={toggleExpanded}
            >
                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-100 mb-2 pr-4">
                        {question.question}
                    </h3>
                    <div className="flex items-center text-sm text-slate-400">
                        <span className="bg-blue-600/20 text-blue-400 px-2 py-1 rounded-full">
                            Question #{question.id}
                        </span>
                    </div>
                </div>
                
                {/* Expand/Collapse Button */}
                <button
                    className="p-2 rounded-lg bg-slate-700/50 hover:bg-slate-600/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                    onClick={(e) => {
                        e.stopPropagation()
                        toggleExpanded()
                    }}
                >
                    <svg 
                        className={`w-5 h-5 text-slate-300 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>

            {/* Answer Section */}
            <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                <div className="border-t border-slate-700/50 pt-4">
                    <div className="flex items-start gap-3">
                        <div className="p-2 bg-green-600/20 rounded-lg">
                            <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div className="flex-1">
                            <h4 className="text-sm font-medium text-green-400 mb-2">Answer:</h4>
                            <p className="text-slate-300 leading-relaxed">
                                {question.answer}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Question
