import axios from 'axios';

const getQuestionsApi = () => {
    return axios.get('https://opentdb.com/api.php?amount=5&category=15&difficulty=easy&type=multiple');
}

export { getQuestionsApi };