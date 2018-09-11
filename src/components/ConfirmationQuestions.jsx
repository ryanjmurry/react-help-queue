import React from 'react';
import PropTypes from 'prop-types';

const ConfirmationQuestions = (props) => {
  return (
    <div>
      <p>Have you gone through all the steps on the Learn How To Program debugging lesson?</p>
      <button onClick={props.onTroubleshootingConfirmation}>Yes</button>
    </div>
  );
};

ConfirmationQuestions.propTypes = {
  onTroubleshootingConfirmation: PropTypes.func
};

export default ConfirmationQuestions;
