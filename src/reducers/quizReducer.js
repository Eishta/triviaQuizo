import {
    FETCH_QUESTIONS,
    FETCH_QUESTIONS_SUCCESS,
    FETCH_QUESTIONS_FAIL,
    UPDATE_RESPONSE,
    UPDATE_SCORE,
    RESET_RESPONSE,
    RESET_SCORE,
    UPDATE_ANSWER,
    RESET_ANSWER
} from '../actions/actionTypes';
import {combineReducers} from 'redux'

const initialState= {
    isLoading: false, 
    questions: [],
    responses: [],
    score: 0,
    answer: new Array(5)
}

const quizReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_QUESTIONS: return { ...state, isLoading: true }
        case FETCH_QUESTIONS_SUCCESS: return { ...state, questions : action.questions, correct_answer: action.correct_answer,options: action.options, isLoading: false }
        case FETCH_QUESTIONS_FAIL: return { ...state, err: action.err, isLoading: false }
        default: return state;
    }
}

const responsesReducer = (state = {responses: []}, action)=> {
    switch(action.type){
        case UPDATE_RESPONSE:{
            let responses = [...state.responses];
            responses[action.index]= true
            return {... state,responses}
        } 
        case RESET_RESPONSE: return {...state, responses: []}
        default: return state;
    }
}

const scoreReducer = (state = {score:0}, action)=> {
    switch(action.type){
        case UPDATE_SCORE: return {... state,score: state.score +1 }
        case RESET_SCORE: return {...state, score: 0}
        default: return state;
    }
}
const answerReducer = (state= {answer:[]}, action) => {
    switch(action.type) {
        case UPDATE_ANSWER: {
            let answer = [...state.answer];
            answer[action.index]= action.answer
            return {... state,answer}
        } 
        case RESET_ANSWER: return {...state, answer: []};
        default: return state;
    }
}
export const rootReducer = combineReducers({
    quizReducer, responsesReducer, scoreReducer, answerReducer
});