import { useState } from "react";
import { Container } from 'components/App.styled'
import { Statistics } from 'components/Statistics/Statistics'
import { FeedbackOptions }from 'components/FeedbackOptions/FeedbackOptions'
import { Section } from 'components/Section/Section'
import { Notification } from 'components/Notification/Notification'

export function App () {
  const [ good, setGood ] = useState(0);
  const [ neutral, setNeutral ] = useState(0);
  const [ bad, setBad ] = useState(0);

  const handleGoodFeedback = (name) => {
    switch (name) {
      case 'good':
        setGood(state => state + 1);
        break;

      case 'neutral':
        setNeutral(state => state + 1);
        break;
          
      case 'bad':
        setBad(state => state + 1);
            break;
          
      default:
        return;
        };
  };


  const  countTotalFeedback = () => {
    return (good + neutral + bad);
  };


  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    if (!totalFeedback) {
      return 0;
    }
    return Math.round((good / totalFeedback) * 100)
  };


  const buttons = ['good', 'neutral', 'bad'];

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions options={buttons}
            onLeaveFeedback={handleGoodFeedback} />
        </Section>

        <Section title="Statistics">
          {good > 0 || neutral > 0 || bad > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
             />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Container>
    );
}
