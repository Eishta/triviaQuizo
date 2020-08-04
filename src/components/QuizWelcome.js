import React, { useState, useSelector, useDispatch } from 'react';
import { connect } from 'react-redux';
import '../styles/Quiz.css';
import { updateAnswer, updateResponse, updateResponseAndScore, getQuestions } from '../actions/actions';

const QuizWelcome = (props) => {

    let { questions, correct_answer, options,getQuestions, updateAnswer, updateResponseAndScore, answer, updateResponse, responses , score} = props;
    const [active, setActive] = useState(0);
    const buttonActive = (e) => {
        setActive(e.target.value);
    }
    const setAnswer = (e) => {
        updateAnswer(e.target.value, active);
        console.log(e.target.value, e.target.name)
    };
    const submitHandler = () => {
        answer[active] === correct_answer[active] ?
            updateResponseAndScore(active) :
            updateResponse(active);
    }
    const nextQuestionHandler = () => {
        if (active !== 4) {
            setActive(+active + 1)
        }
    }
    const resetQuiz=()=>{
        setActive(0)
        getQuestions()
    }
    return (
        <>
            <div class="centered-element" >
                {questions.length ?
                    <>
                        <div class="btn-group-vertical" role="group" aria-label="Basic example" onClick={buttonActive}>
                            <button type="button" class={`btn ${active == 0 ? 'btn-active' : 'btn-secondary'}`} value={0}>1</button>
                            <button type="button" class={`btn ${active == 1 ? 'btn-active' : 'btn-secondary'}`} value={1}>2</button>
                            <button type="button" class={`btn ${active == 2 ? 'btn-active' : 'btn-secondary'}`} value={2}>3</button>
                            <button type="button" class={`btn ${active == 3 ? 'btn-active' : 'btn-secondary'}`} value={3}>4</button>
                            <button type="button" class={`btn ${active == 4 ? 'btn-active' : 'btn-secondary'}`} value={4}>5</button>

                        </div>
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Question no. {+active + 1}</h5>
                                <p class="card-text">{questions ? questions[active] : null}</p>
                                <div class="gridDisplay" >
                                    {options ?
                                        options[active].map(ele => {
                                            return (<span>
                                                <input type="radio" onChange={setAnswer} disabled={responses[active]} value={ele} name="answer" checked={ele === answer[active]} /> {ele}
                                            </span>)
                                        })
                                        : null}
                                </div>
                            </div>
                            <div >
                                <button class="btn btn-submit submit" disabled={!answer[active] || responses[active]} onClick={submitHandler}>Submit</button>
                                {active != 4 ? <button class="btn btn-secondary submit" onClick={nextQuestionHandler}>Next </button> : null}

                            </div>

                        </div>
                    </>
                    : "is Loading ...."}


            </div>
            <div>
            <div class="card result">
                     <div class="card-body">
                         Score: {score}/{5}
                     </div>
                   {responses.filter(res => res).length === 5 ? <button class="btn btn-secondary resetButton" onClick={resetQuiz}>Reset</button>: null}
                 </div>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        questions: state.quizReducer.questions,
        correct_answer: state.quizReducer.correct_answer,
        options: state.quizReducer.options,
        answer: state.answerReducer.answer,
        responses: state.responsesReducer.responses,
        score: state.scoreReducer.score
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getQuestions: ()=> dispatch(getQuestions()),
        updateAnswer: (answer, index) => dispatch(updateAnswer(answer, index)),
        updateResponseAndScore: (index) => dispatch(updateResponseAndScore(index)),
        updateResponse: (index) => dispatch(updateResponse(index))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(QuizWelcome);
