import React, { useRef, useState } from 'react';

import Word from './components/Word';
import Timer from './components/Timer';

import getWordList from './getWordList';

import './App.css';

const App: React.FC<{}> = () => {
  const [input, setInput] = useState('');
  const wordList = useRef(getWordList());
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [correctWords, setCorrectWords] = useState<boolean[]>([]);
  const [startCounting, setStartCounting] = useState(false);

  const ranOutOfWords = wordList.current[activeWordIndex] ? false : true

  const processInput = (value: string): void => {
    setStartCounting(true);

    if (value.endsWith(' ')) {

      setActiveWordIndex(index => index + 1);
      setInput('');

      setCorrectWords(data => {
        const newResult = [...data];
        const word = value.trim();

        newResult[activeWordIndex] = word === wordList.current[activeWordIndex];
        return newResult;
      })
    
      if (activeWordIndex + 1 === wordList.current.length) {
        setStartCounting(false);
        return;
      }
    } else {
      setInput(value);
    }
  };

  const reset = () => {
    setInput('');
    setActiveWordIndex(0);
    setCorrectWords([]);
  };

  return (
    <div>
      <h1>Typing Test</h1>
      <Timer 
        startCounting={startCounting}
        correctWords={correctWords.filter(Boolean).length}
      />
      <p>
        {wordList.current.map((word, index) => (
          <Word 
            key={`${word}-${index}`}
            text={word}
            active={index === activeWordIndex}
            correct={correctWords[index]}
          />
        ))}
      </p>
      <input 
        type='text'
        value={input}
        disabled={ranOutOfWords}
        onChange={(e) => processInput(e.target.value)}
      />

      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
