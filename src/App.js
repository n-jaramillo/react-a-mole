import './App.css';
import { useState } from 'react';
import MoleContainer from './MoleContainer';

function App() {
  let [score, setScore] = useState(0)
  let [start, setStart] = useState("")
  let [pause, setPause] = useState(false)

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

  const handleStart = (e) => {
    if (start === "") {
      setStart("on")
    } else if (start === "on") {
      setStart("pause")
      setPause(true)
    } else if (start === "pause") {
      setStart("on")
      setPause(false)
    }
  }

  const handleReset = (e) => {
    if (window.confirm("Press OK to restart game\n\nOR\n\nPress cancel to continue playing")) {
      setStart("")
      setPause(false)
      setScore(0)
    }
  }

  let showGame = pause ? <div className='container' style={{ height: "612px", "align-content": "center", "justify-content": "center" }}><h1>PAUSED</h1></div> : <div>{createMoleHill()}</div>

  const showScore = () => {
    if (score == 0) {
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
      <h2>SCORE: {showScore()}</h2>
      <div>
        <button onClick={handleStart}>
          {
            pause ? <span>Resume Game</span> : <span>Pause Game</span>
          }
        </button>
        <button className='restart' onClick={handleReset}>
          <span>Restart Game</span>
        </button>
      </div>
      {showGame}
      {/* {createMoleHill()} */}
    </div >
  );
}

export default App;
