import { useState } from "react"

export function DynamicDirectorCmp( {picDetails, fullname, txt}) {

    const [isDirectorClicked, setIsDirectorClicked] = useState( {fullname: '', isClicked: false})
    return (
        <div className="director">
            <img src={`https://xsgames.co/randomusers/assets/avatars/${picDetails.gender}/${picDetails.num}.jpg`} title={`${fullname} picture`} alt={`${fullname} picture`} />
            <h3>{fullname}</h3>
            <p>"{txt}"</p>
            <button className="open-close-btn"></button>
        </div>
    )
}