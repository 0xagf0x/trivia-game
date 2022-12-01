import React, {useEffect, useState} from 'react';
import './App.css';
import QuestionsModal from './components/QuestionsModal/QuestionsModal';

import StartModal from './components/StartModal/StartModal';

function App() {
  const [startModal, setStartModal] = useState(true);
  const [questionsModal, setQuestionsModal] = useState(false);


  // useEffect(() => {
  //   setQuestionsModal(false); 
  // }, [])

  const handleStartClick = async() => {
    setStartModal(false);
    setQuestionsModal(true);
  };


  return (
    <div className="App">
      <div className="main-bg">
        {startModal 
        ? <StartModal 
          handleStartClick={handleStartClick}
        />
        : null
        }

        {questionsModal
        ? <QuestionsModal />
        : null
        }
      </div>
    </div>
  );
}

export default App;
