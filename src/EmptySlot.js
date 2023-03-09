import { useEffect } from "react"
import molehill from './molehill.png'

function EmptySlot(props) {
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.setDisplayMole(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img className="slot" src={molehill} onClick={props.handleClick} alt="Mole Hill" />
        </div>
    )
}

export default EmptySlot