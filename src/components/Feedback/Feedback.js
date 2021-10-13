import React from 'react';
import './Feedback.css';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';

// import styles from '../Feedback/Feedback.module.css''

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrementBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.bad + this.state.neutral + this.state.good;
    // this.setState(prevState => (
    //     prevState.bad + 1
    //  ))
  };

  // countPositiveFeedbackPercentage = () => {
  //     return (this.state.good * 100 /(this.state.bad + this.state.neutral +this.state.good))
  // }
  //     ;
  // countPositiveFeedbackPercentage();

  render() {
    return (
      <div className="Feedback_container">
        <Section title="Please leave feedback">
          <FeedbackOptions onIncrementBad={this.handleIncrementBad} />
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            // positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>

        {/* <FeedbackOptions onIncrementBad={this.handleIncrementBad} /> */}
        {/* <Statistics  /> */}
        {/* <span className="Feedback_title">Please leave feedback</span> */}
        {/* <div >
                  <button type="button" className="Feedback_btn">Good</button>
                  <button type="button" className="Feedback_btn">Neutral</button>
                  <button type="button" onClick={this.handleIncrementBad} className="Feedback_btn">Bad</button>
              </div> */}
        {/* <span className="Feedback_title">Statistic</span>
              <ul className="Statistic_list">
                  <li>Good: <span>{this.state.good}</span></li>
                  <li>Neutral: <span>{this.state.neutral}</span></li>
                  <li>Bad: <span>{this.state.bad}</span></li>
              </ul> */}
      </div>
    );
  }
}

export default Feedback;
