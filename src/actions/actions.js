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
} from './actionTypes';
import { getQuestionsApi } from '../api/getQuestions';


const fetchQuestions = () => {
    return {
        type: FETCH_QUESTIONS
    }
}
const fetchQuestionsSuccess = (json) => {
    return {
        type: FETCH_QUESTIONS_SUCCESS,
        results: json.data.results,
        questions: mapData(json.data.results, 'question'),
        correct_answer: mapData(json.data.results, 'correct_answer'),
        options: json.data.results.map(ele => shuffleArray([ele.correct_answer, ...ele.incorrect_answers]))
    }
}
const fetchQuestionsFail = (error) => {
    return {
        type: FETCH_QUESTIONS_FAIL,
        error
    }
}

export const getQuestions = () => {
    return dispatch => {
        dispatch(fetchQuestions());
        getQuestionsApi()
            .then(res => {dispatch(fetchQuestionsSuccess(res));
            dispatch(resetAnswer());
            dispatch(resetResponse());
            dispatch(resetScore())
        })
            .catch(err => dispatch(fetchQuestionsFail(err)))
    }

}

export const updateResponse = (index) => {
    return {
        type: UPDATE_RESPONSE,
        index
    }
}
export const resetResponse = () => {
    return {
        type: RESET_RESPONSE
    }
}
export const updateScore = () => {
    return {
        type: UPDATE_SCORE
    }
}

export const resetScore = () => {
    return {
        type: RESET_SCORE
    }
}
export const updateAnswer = (answer, index) => {
    return {
        type: UPDATE_ANSWER,
        answer, index
    }
}

export const resetAnswer = () => {
    return {
        type: RESET_ANSWER
    }
}

export const updateResponseAndScore = (index) => {
    return dispatch=> {
        dispatch(updateResponse(index));
        dispatch(updateScore());
    }
    

}
const mapData = (data, field) => {
    return data.map(result => result[field])
}
const shuffleArray = (array) => {

    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

