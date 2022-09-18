import React from "react";
import PropTypes from 'prop-types';
import { BtnFeedback } from 'components/FeedbackOptions/FeedbackOptions.styled'


export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    // <h2>Please leave feedback</h2>
    <div>
      {options.map(option => (
        <BtnFeedback key={option} type='button' onClick={() =>
          onLeaveFeedback(option)}>{option}
        </BtnFeedback>
      )
      )}
    </div>
  )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}