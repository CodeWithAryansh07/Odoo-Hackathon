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
    )
}

export default Questionnaire