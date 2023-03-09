import { useState } from "react"
import Mole from './Mole'
import EmptySlot from "./EmptySlot"

function MoleContainer(props) {
    let [displayMole, setDisplayMole] = useState(false)

    const handleClick = (e) => {
        if (displayMole === false) {
            props.setScore(props.score - 1)
        } else {
            props.setScore(props.score + 1)
            setDisplayMole(false)
        }
    }

    let showMole = displayMole ? <Mole setScore={props.setScore} setDisplayMole={setDisplayMole} handleClick={handleClick} /> : <EmptySlot setScore={props.setScore} setDisplayMole={setDisplayMole} handleClick={handleClick} />

    return (
        <div className="mole-container">
            {showMole}
        </div>
    )
}

export default MoleContainer