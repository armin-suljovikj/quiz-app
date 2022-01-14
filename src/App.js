import { Routes, Route} from 'react-router-dom'
import './index.css';
import React from 'react'
import QuizPage from './components/QuizPage';
import StartingPage from './components/StartingPage';


function App() {

  return (
    <React.Fragment>
        <Routes>
          <Route path="/quiz-app" element={<StartingPage />} ></Route>
          <Route path="/quiz-app/quiz" element={<QuizPage />} ></Route>
        </Routes>
    </React.Fragment>
  );
}

export default App;
