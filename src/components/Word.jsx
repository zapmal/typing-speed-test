import React, { memo } from 'react';

const Word = memo(({ correct, text, active}) => {

  if (correct === true) {
    return <span className='correct'>{text} </span>
  }

  if (correct === false) {
    return <span className='incorrect'>{text} </span>
  }

  if (active) {
    return <span className='active'>{text} </span>
  }

  return <span>{text} </span>
});

export default Word;