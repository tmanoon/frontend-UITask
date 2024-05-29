import { useState } from "react"

export function DynamicDirectorCmp( {picDetails, fullname}) {
    const [isDirectorClicked, setIsDirectorClicked] = useState( {fullname: '', isClicked: false})
    return (
        <div className="director">
            <img src={`https://xsgames.co/randomusers/assets/avatars/${picDetails.gender}/${picDetails.num}.jpg`} title={`${fullname} picture`} alt={`${fullname} picture`} />
            <h3>{fullname}</h3>
            <p>"Empowered teams create truly amazing products. Set the north star and let them follow it."</p>
            <button className="open-close-btn" id={fullname}>+</button>
        </div>
    )
}