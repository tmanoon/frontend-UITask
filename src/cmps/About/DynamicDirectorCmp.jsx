import { useState } from "react"

export function DynamicDirectorCmp({ picDetails, fullname }) {

    const [isDirectorClicked, setIsDirectorClicked] = useState(false)


    return (
        <div className="director flex column align-center">
            <img src={`https://xsgames.co/randomusers/assets/avatars/${picDetails.gender}/${picDetails.num}.jpg`}
                title={`${fullname} picture`}
                alt={`${fullname} picture`}
                style={{ display: !isDirectorClicked ? 'block' : 'none' }} />
            <h3
                className={isDirectorClicked ? 'clicked-director' : ''}>{fullname}</h3>
            <p
                style={{ display: isDirectorClicked ? 'block' : 'none' }}
                className={isDirectorClicked ? 'clicked-director' : ''}>"Empowered teams create truly amazing products. Set the north star and let them follow it."
            </p>
            <div
                style={{ display: isDirectorClicked ? 'block' : 'none' }}
                className="icons">
                <svg width="60" height="20" viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M42 0H58C59.1 0 60 0.9 60 2V18C60 19.1 59.1 20 58 20H42C40.9 20 40 19.1 40 18V2C40 0.9 40.9 0 42 0ZM46 17V8H43V17H46ZM44.5 6.3C43.5 6.3 42.7 5.5 42.7 4.5C42.7 3.5 43.5 2.7 44.5 2.7C45.5 2.7 46.3 3.5 46.3 4.5C46.3 5.5 45.5 6.3 44.5 6.3ZM54 17H57V11.3C57 9.4 55.4 7.8 53.5 7.8C52.6 7.8 51.5 8.4 51 9.2V8H48V17H51V11.7C51 10.9 51.7 10.2 52.5 10.2C53.3 10.2 54 10.9 54 11.7V17Z" fill="white" />
                    <path d="M24 2.309C23.117 2.701 22.168 2.965 21.172 3.084C22.189 2.475 22.97 1.51 23.337 0.36C22.386 0.924 21.332 1.334 20.21 1.555C19.313 0.598 18.032 0 16.616 0C13.437 0 11.101 2.966 11.819 6.045C7.728 5.84 4.1 3.88 1.671 0.901C0.381 3.114 1.002 6.009 3.194 7.475C2.388 7.449 1.628 7.228 0.965 6.859C0.911 9.14 2.546 11.274 4.914 11.749C4.221 11.937 3.462 11.981 2.69 11.833C3.316 13.789 5.134 15.212 7.29 15.252C5.22 16.875 2.612 17.6 0 17.292C2.179 18.689 4.768 19.504 7.548 19.504C16.69 19.504 21.855 11.783 21.543 4.858C22.505 4.163 23.34 3.296 24 2.309Z" fill="white" />
                </svg>
            </div>
            <span
                className={`open-close-btn flex center ${isDirectorClicked ? 'clicked-director' : ''}`}
                id={fullname}
                onClick={() => setIsDirectorClicked(!isDirectorClicked)}>{isDirectorClicked ? 'x' : '+'}</span>
        </div>
    )
}