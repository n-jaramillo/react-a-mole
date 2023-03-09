import './App.css';
import { useState } from 'react';
import MoleContainer from './MoleContainer';

function App() {
  let [score, setScore] = useState(0)
  // let [start, setStart] = useState(true)
  let [pause, setPause] = useState(false)

  // Mole Hill
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

  // TODO: Start
  // const handleStart = (e) => {
  //   if (start === true) {
  //     setStart(false)
  //   } else {
  //     setStart(true)
  //   }
  // }

  // Pause
  const handlePause = (e) => {
    if (pause === true) {
      setPause(false)
    } else {
      setPause(true)
    }
  }

  // Pause Screen
  let showGame = pause ? <div className='container' style={{ height: "612px", "align-content": "center", "justify-content": "center" }}><h1>PAUSED</h1></div> : <div>{createMoleHill()}</div>

  // Reset
  const handleReset = (e) => {
    if (window.confirm("Press OK to restart game\n\nOR\n\nPress cancel to continue playing")) {
      // setStart(true)
      setPause(false)
      setScore(0)
    }
  }

  // Score Styling
  const showScore = () => {
    if (score === 0) {
      return (
        <span>{score}</span>
      )
    } else if (score > 0) {
      return (
        <span style={{ color: "thistle" }}>{score}</span>
      )
    } else {
      return (
        <span style={{ color: "red" }}>{score}</span>
      )
    }
  }

  return (
    <div className="App">
      <h1>REACT-A-MOLE!</h1>
      {/* TODO: Start Button */}
      {/* <button style={{ visibility: { start } ? "visible" : "hidden" }} onClick={handleStart}>Start Game</button> */}
      {/* <div style={{ visibility: { start } ? "hidden" : "visible" }}> */}
      <div>
        <h2>SCORE: {showScore()}</h2>
        <div>
          <button onClick={handlePause}>
            {
              pause ? <span>Resume Game</span> : <span>Pause Game</span>
            }
          </button>
          <button className='restart' onClick={handleReset}>
            <span>Restart Game</span>
          </button>
        </div>
        {showGame}
      </div>
    </div >
  );
}

export default App;
