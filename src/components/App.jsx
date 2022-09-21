import React, { Component } from "react";
import { Container } from 'components/App.styled'
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

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return (good + neutral + bad);
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    if (!totalFeedback) {
      return 0;
    }
    return Math.round((good / totalFeedback) * 100)
  };

  render() {
    const { good, neutral, bad } = this.state;

    const buttons = Object.keys(this.state);

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions options={buttons}
            onLeaveFeedback={this.handleGoodFeedback} />
        </Section>

        <Section title="Statistics">
          {good > 0 || neutral > 0 || bad > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
             />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Container>
    );
  }
}
