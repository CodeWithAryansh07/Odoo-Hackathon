import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout.jsx'
import QuestionsPage from './pages/QuestionsPage.jsx'
import AskAQuestion from './pages/AskAQuestion.jsx'
import AskAQuestionQuill from './pages/AskAQuestionQuill.jsx'
import QA from './components/QA.jsx'

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
        <Route path='/questions' element={<QuestionsPage />} />
        <Route path='/ask-a-question' element={<AskAQuestionQuill />} />
        <Route path='/question/:id' element={<QA />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
