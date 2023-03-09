import './App.css';
import { useState } from 'react';
import MoleContainer from './MoleContainer';

function App() {
  let [score, setScore] = useState(0)

  const createMoleHill = () => {
    let hills = []
    for (let i = 0; i < 9; i++) {
      hills.push(
        <MoleContainer
          key={i}
          setScore={setScore}
          score={score} />
      )
    }

    return (
      <div className='container'>
        {hills}
      </div>
    )
  }

  return (
    <div className="App">
      <h1>REACT-A-MOLE!</h1>
      <h2>SCORE</h2>
      <h2>{score}</h2>
      {createMoleHill()}
    </div >
  );
}

export default App;
