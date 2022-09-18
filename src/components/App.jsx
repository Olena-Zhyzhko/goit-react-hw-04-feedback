import React, { Component } from "react";
import { Statistics } from 'components/Statistics/Statistics'
import { FeedbackOptions }from 'components/FeedbackOptions/FeedbackOptions'
import { Section } from 'components/Section/Section'
import { Notification } from 'components/Notification/Notification'

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleGoodFeedback = (stateName) => {
    this.setState(prevState => ({
      [stateName]: prevState[stateName] + 1
    })
      )
  };

  render() {
    const { good, neutral, bad } = this.state;

    const countTotalFeedback = () => {
    return (good + neutral + bad);
    };

    const countPositiveFeedbackPercentage = () => {
      return Math.round((good / countTotalFeedback()) * 100)
    };

    const buttons = ['good', 'neutral', 'bad']

    return (
      <div style={{
        padding: 20,
        color: '#010101'
      }}>
        <Section title="Please leave feedback">
          <FeedbackOptions options={buttons}
            onLeaveFeedback={this.handleGoodFeedback}></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {good > 0 || neutral > 0 || bad > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            >
            </Statistics>
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </div>
    );
  }
}
