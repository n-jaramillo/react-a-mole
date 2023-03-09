import { useState } from "react"
import Mole from './Mole'
import EmptySlot from "./EmptySlot"

function MoleContainer(props) {
    let [displayMole, setDisplayMole] = useState(false)

    const handleClick = (e) => {
        props.setScore(props.score + 1)
        setDisplayMole(false)
    }

    let showMole = displayMole ? <Mole setScore={props.setScore} setDisplayMole={setDisplayMole} handleClick={handleClick} /> : <EmptySlot setDisplayMole={setDisplayMole} />

    return (
        <div className="mole-container">
            {showMole}
        </div>
    )
}

export default MoleContainer