import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, useSearchParams } from 'react-router-dom'
import { questions } from '../constants'

const QA = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const [votes, setVotes] = useState(0)
    const [userVote, setUserVote] = useState(null)
    const [newAnswer, setNewAnswer] = useState('')
    const [showAnswerForm, setShowAnswerForm] = useState(false)
    const [comments, setComments] = useState({})
    const [newComment, setNewComment] = useState('')
    const [showCommentForm, setShowCommentForm] = useState(null)

    // Check if we should show the answer form based on URL parameter
    useEffect(() => {
        const showForm = searchParams.get('showAnswerForm')
        if (showForm === 'true') {
            setShowAnswerForm(true)
        }
    }, [searchParams])

    // Find the question by ID
    const question = questions.find(q => q.id === parseInt(id))

    if (!question) {
        return (
            <div className="min-h-screen bg-slate-900 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-slate-300 mb-4">Question Not Found</h1>
                    <button 
                        onClick={() => navigate('/')} 
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                    >
                        Go Back Home
                    </button>
                </div>
            </div>
        )
    }

    const handleVote = (voteType) => {
        if (userVote === voteType) {
            setVotes(votes - (voteType === 'up' ? 1 : -1))
            setUserVote(null)
        } else {
            const oldVote = userVote === 'up' ? 1 : userVote === 'down' ? -1 : 0
            const newVote = voteType === 'up' ? 1 : -1
            setVotes(votes - oldVote + newVote)
            setUserVote(voteType)
        }
    }

    const handleAnswerSubmit = (e) => {
        e.preventDefault()
        // Here you would typically send the answer to your backend
        console.log('New answer submitted:', newAnswer)
        setNewAnswer('')
        setShowAnswerForm(false)
        alert('Answer submitted successfully!')
    }

    const handleCommentSubmit = (e) => {
        e.preventDefault()
        const answerId = showCommentForm
        const newCommentObj = {
            id: Date.now(),
            text: newComment,
            author: 'Current User',
            timestamp: new Date().toISOString()
        }
        
        setComments(prev => ({
            ...prev,
            [answerId]: [...(prev[answerId] || []), newCommentObj]
        }))
        
        setNewComment('')
        setShowCommentForm(null)
    }

    // Mock answers - in real app, these would come from backend
    const mockAnswers = question.answer ? [{
        id: 1,
        content: question.answer,
        author: 'Expert User',
        timestamp: '2024-01-15T09:30:00Z',
        votes: 12,
        isAccepted: true
    }] : []

    return (
        <div className="min-h-screen bg-slate-900 py-8">
            <div className="max-w-4xl mx-auto px-6">
                {/* Back Button */}
                <button 
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-slate-400 hover:text-slate-200 mb-6 transition-colors"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Questions
                </button>

                {/* Question Section */}
                <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-xl p-8 mb-8">
                    <div className="flex items-start gap-6">
                        {/* Voting Section */}
                        <div className="flex flex-col items-center gap-2 min-w-[60px]">
                            <button
                                onClick={() => handleVote('up')}
                                className={`p-3 rounded-lg transition-all duration-200 hover:scale-110 ${
                                    userVote === 'up' 
                                        ? 'bg-green-600/30 text-green-400' 
                                        : 'bg-slate-700/50 text-slate-400 hover:bg-slate-600/50 hover:text-green-400'
                                }`}
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 4l8 8H4l8-8z"/>
                                </svg>
                            </button>
                            <span className={`text-xl font-bold ${votes > 0 ? 'text-green-400' : votes < 0 ? 'text-red-400' : 'text-slate-400'}`}>
                                {(question.votes || 0) + votes}
                            </span>
                            <button
                                onClick={() => handleVote('down')}
                                className={`p-3 rounded-lg transition-all duration-200 hover:scale-110 ${
                                    userVote === 'down' 
                                        ? 'bg-red-600/30 text-red-400' 
                                        : 'bg-slate-700/50 text-slate-400 hover:bg-slate-600/50 hover:text-red-400'
                                }`}
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 20l-8-8h16l-8 8z"/>
                                </svg>
                            </button>
                        </div>

                        {/* Question Content */}
                        <div className="flex-1">
                            <h1 className="text-3xl font-bold text-slate-100 mb-6">
                                {question.question}
                            </h1>

                            {/* Question Description */}
                            {question.description && (
                                <div className="mb-6 p-4 bg-slate-700/30 rounded-lg">
                                    <div 
                                        className="text-slate-200 prose prose-invert max-w-none"
                                        dangerouslySetInnerHTML={{ __html: question.description }}
                                    />
                                </div>
                            )}

                            {/* Meta Information */}
                            <div className="flex items-center gap-6 text-sm text-slate-400 mb-4">
                                <span className="flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Asked {question.timestamp ? new Date(question.timestamp).toLocaleDateString() : '2 hours ago'}
                                </span>
                                <span className="flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    {question.author || 'Anonymous User'}
                                </span>
                            </div>

                            {/* Tags */}
                            <div className="flex items-center gap-2">
                                {question.tags && question.tags.map((tag, index) => (
                                    <span key={index} className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Answers Section */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-slate-100">
                            {mockAnswers.length} Answer{mockAnswers.length !== 1 ? 's' : ''}
                        </h2>
                        <button
                            onClick={() => setShowAnswerForm(!showAnswerForm)}
                            className="flex items-center gap-2 px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 hover:text-blue-300 rounded-lg transition-all duration-200"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            Add Answer
                        </button>
                    </div>

                    {/* Answer Form */}
                    {showAnswerForm && (
                        <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-xl p-6 mb-6">
                            <h3 className="text-lg font-semibold text-slate-200 mb-4">Your Answer</h3>
                            <form onSubmit={handleAnswerSubmit}>
                                <textarea
                                    value={newAnswer}
                                    onChange={(e) => setNewAnswer(e.target.value)}
                                    placeholder="Write your answer here..."
                                    className="w-full h-32 px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all resize-none"
                                    required
                                />
                                <div className="flex gap-3 mt-4">
                                    <button
                                        type="submit"
                                        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                                    >
                                        Submit Answer
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setShowAnswerForm(false)}
                                        className="px-6 py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg transition-colors"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}

                    {/* Existing Answers */}
                    <div className="space-y-6">
                        {mockAnswers.map((answer) => (
                            <div key={answer.id} className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-xl p-6">
                                {answer.isAccepted && (
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="p-2 bg-green-600/20 rounded-lg">
                                            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <span className="text-green-400 font-medium">Accepted Answer</span>
                                    </div>
                                )}
                                
                                <div className="mb-4">
                                    <p className="text-slate-200 leading-relaxed">{answer.content}</p>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4 text-sm text-slate-400">
                                        <span>Answered by {answer.author}</span>
                                        <span>{new Date(answer.timestamp).toLocaleDateString()}</span>
                                        <span>{answer.votes} votes</span>
                                    </div>
                                    
                                    <button
                                        onClick={() => setShowCommentForm(showCommentForm === answer.id ? null : answer.id)}
                                        className="text-blue-400 hover:text-blue-300 text-sm transition-colors"
                                    >
                                        {comments[answer.id]?.length || 0} Comments
                                    </button>
                                </div>

                                {/* Comments */}
                                {comments[answer.id] && (
                                    <div className="mt-4 space-y-3">
                                        {comments[answer.id].map((comment) => (
                                            <div key={comment.id} className="bg-slate-700/30 rounded-lg p-3">
                                                <p className="text-slate-300 text-sm">{comment.text}</p>
                                                <div className="flex items-center gap-2 mt-2 text-xs text-slate-500">
                                                    <span>{comment.author}</span>
                                                    <span>•</span>
                                                    <span>{new Date(comment.timestamp).toLocaleDateString()}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Comment Form */}
                                {showCommentForm === answer.id && (
                                    <form onSubmit={handleCommentSubmit} className="mt-4">
                                        <textarea
                                            value={newComment}
                                            onChange={(e) => setNewComment(e.target.value)}
                                            placeholder="Add a comment..."
                                            className="w-full h-20 px-3 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-sm resize-none"
                                            required
                                        />
                                        <div className="flex gap-2 mt-2">
                                            <button
                                                type="submit"
                                                className="px-4 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm transition-colors"
                                            >
                                                Add Comment
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setShowCommentForm(null)}
                                                className="px-4 py-1 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded text-sm transition-colors"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        ))}

                        {mockAnswers.length === 0 && (
                            <div className="text-center py-12 bg-slate-800/30 rounded-xl">
                                <svg className="w-16 h-16 mx-auto mb-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <h3 className="text-xl font-semibold text-slate-300 mb-2">No answers yet</h3>
                                <p className="text-slate-400 mb-4">Be the first to answer this question!</p>
                                <button
                                    onClick={() => setShowAnswerForm(true)}
                                    className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                                >
                                    Write an Answer
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QA