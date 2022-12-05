import React, {useEffect, useState} from 'react';
import './App.css';
import QuestionsCard from './components/QuestionsCard/QuestionsCard';

import StartCard from './components/StartCard/StartCard';

function App() {
  const [startModal, setStartModal] = useState(true);
  const [questionsModal, setQuestionsModal] = useState(false);

  const handleStartClick = async() => {
    setStartModal(false);
    setQuestionsModal(true);
  };

  return (
    <div className="App">
      <div className="main-bg">
        {startModal 
        ? <StartCard 
          handleStartClick={handleStartClick}
        />
        : null
        }

        {questionsModal
        ? <QuestionsCard />
        : null
        }
      </div>
    </div>
  );
}

export default App;
