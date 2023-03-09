import { useEffect } from "react"
import mole from './mole.png'

function Mole(props) {
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.setDisplayMole(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img className="slot" src={mole} onClick={props.handleClick} alt="Mole" />
        </div>
    )
}

export default Mole