import React from 'react';
import QuizWelcome from './QuizWelcome'
import '../styles/App.css';
import { connect } from 'react-redux';
import  {getQuestions}  from '../actions/actions';

class App extends React.Component {
  componentDidMount() {
    console.log(this.props)
    this.props.getQuestions();
  }
  render() {
    return (
      <div className="back">
        <QuizWelcome />
      </div>
    );
  }

}

const mapDispatchToProps = dispatch => {
  return {
    getQuestions: ()=> dispatch(getQuestions()) 
  }
}
export default connect(null, mapDispatchToProps)(App);
