import React from 'react'

const QuizBox = () => {
  return (
    <div className='main-quizbox'>
        <div className='quiz-box'>
            <img className='quiz-box-size' src="https://cdn.shopify.com/s/files/1/0603/2741/files/quiz_bg_m.jpg?v=7567612560067902815" alt="" />
            <div className='quiz-box-para'>
            <h1 className='text-quiz'>not sure where to start?</h1>
            <div className='quiz-box-text'>
            <span className='q-text'>answer some questions and we'll build your routine</span>
            </div>
            <div className='quiz-box-btn'>
                <h3>TAKE THE QUIZ</h3>
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default QuizBox