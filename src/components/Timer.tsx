import React, { useState, useEffect, useRef } from 'react';

interface Props {
  startCounting: boolean;
  correctWords: number;
};

const Timer: React.FC<Props> = ({ startCounting, correctWords }) => {
  const intervalRef = useRef<number>(0);
  const [timeElapsed, setTimeElapsed] = useState(0);

  useEffect(() => {
    if (startCounting) {
      intervalRef.current = window.setInterval(() => {
        setTimeElapsed(oldTime => oldTime + 1);
      }, 1000);
    }

    return () => window.clearInterval(intervalRef.current);
  }, [startCounting]);

  const minutes = timeElapsed / 60;

  return (
    <div>
      <p><strong>Time:</strong> {correctWords ? timeElapsed : 0}</p>
      <p><strong>Speed:</strong> {Math.ceil(correctWords / minutes) || 0} WPM</p>
    </div>
  );
};

export default Timer;