import React, {Component, useState} from 'react'

let quizData = require('./quiz_data.json');

export default function Quiz(){
    //const [quiz_position, setPosition] = useState(1)
    return(
        <div className='QuizQuestion'>{quizData.quiz_questions[0].instruction_text}</div>
    )
}