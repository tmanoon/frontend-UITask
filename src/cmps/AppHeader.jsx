import { NavLink } from "react-router-dom";
export function AppHeader() {
    return (
        <section className="app-header flex space-between align-center">
            <div className="logo-and-links flex align-center">
                <svg width="160" height="40" viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="myteam" fillRule="evenodd" clipRule="evenodd" d="M68.3174 29.5312V13.2143H72.6997V8.19196H68.3174V0H62.1474V8.19196H58.3538V13.2143H62.1474V29.5312H68.3174ZM6.21366 18.2366V29.5312H0V8.19196H6.21366V11.2946C6.72238 10.1935 7.44913 9.32292 8.3939 8.68304C9.41134 8.07292 10.5015 7.76786 11.6642 7.76786C14.9637 7.76786 17.1948 9.01786 18.3576 11.5179C19.8837 8.9881 21.9549 7.72321 24.5712 7.72321C27.1875 7.72321 29.186 8.56399 30.5669 10.2455C31.9477 11.9271 32.6381 14.3155 32.6381 17.4107V29.5312H26.4898V18.1473C26.4898 16.8378 26.1773 15.8036 25.5523 15.0446C24.8983 14.2857 24.0407 13.9062 22.9797 13.9062C21.9186 13.9062 21.0683 14.2634 20.4288 14.9777C19.7892 15.692 19.4695 16.7783 19.4695 18.2366V29.5312H13.2558V18.0134C13.1977 16.7336 12.8561 15.7292 12.2311 15C11.5916 14.2708 10.7631 13.9062 9.74564 13.9062C8.7282 13.9062 7.88517 14.256 7.21657 14.9554C6.54797 15.6548 6.21366 16.7485 6.21366 18.2366ZM57.4981 8.19196L44.6347 40H38.0722L43.0868 27.3438L35.0417 8.19196H41.6478L46.2481 20.2902L50.892 8.19196H57.4981ZM95.2923 25.6473C93.3591 28.5491 90.1833 29.9926 85.7646 29.9777C82.6978 29.9777 80.1106 28.9435 78.003 26.875C75.9245 24.7768 74.8853 22.0833 74.8853 18.7946C74.8853 15.506 75.9245 12.8348 78.003 10.7812C80.0815 8.72768 82.6542 7.70833 85.721 7.72321C88.7879 7.72321 91.3388 8.76488 93.3737 10.8482C95.4085 12.9315 96.4333 15.6399 96.4478 18.9732C96.4478 19.003 96.4187 19.6577 96.3606 20.9375H81.0771C81.1934 22.0685 81.7603 22.9464 82.7777 23.5714C83.7952 24.1964 84.9434 24.5089 86.2225 24.5089C88.2138 24.5089 89.7327 23.8393 90.7792 22.5L95.2923 25.6473ZM90.1905 16.9643H81.1644C81.3969 15.8036 81.9783 14.8958 82.9085 14.2411C83.8097 13.5863 84.7835 13.2738 85.83 13.3036C86.8766 13.3333 87.8286 13.6607 88.6862 14.2857C89.5437 14.9107 90.0452 15.8036 90.1905 16.9643ZM113.088 29.2188C111.911 29.7247 110.785 29.9628 109.709 29.933C106.846 29.933 104.36 28.9062 102.253 26.8527C100.145 24.7991 99.0912 22.128 99.0912 18.8393C99.0912 15.5506 100.181 12.8795 102.362 10.8259C104.542 8.77232 106.991 7.7381 109.709 7.72321C110.814 7.72321 111.947 7.96875 113.11 8.45982C114.273 8.95089 115.167 9.6503 115.792 10.558V8.19196H121.94V29.5312H115.792V27.0982C115.167 28.006 114.266 28.7128 113.088 29.2188ZM110.712 23.9062C109.302 23.9062 108.088 23.4301 107.071 22.4777C106.024 21.5253 105.501 20.3199 105.501 18.8616C105.501 17.4182 106.024 16.2054 107.071 15.2232C108.205 14.256 109.447 13.7723 110.799 13.7723C112.151 13.7723 113.321 14.2485 114.309 15.2009C115.298 16.1533 115.792 17.3735 115.792 18.8616C115.792 20.3497 115.298 21.5625 114.309 22.5C113.321 23.4375 112.122 23.9062 110.712 23.9062ZM133.522 18.2366V29.5312H127.309V8.19196H133.522V11.2946C134.031 10.1935 134.758 9.32292 135.703 8.68304C136.72 8.07292 137.81 7.76786 138.973 7.76786C142.272 7.76786 144.504 9.01786 145.666 11.5179C147.193 8.9881 149.264 7.72321 151.88 7.72321C154.496 7.72321 156.495 8.56399 157.876 10.2455C159.256 11.9271 159.947 14.3155 159.947 17.4107V29.5312H153.799V18.1473C153.799 16.8378 153.486 15.8036 152.861 15.0446C152.207 14.2857 151.35 13.9062 150.288 13.9062C149.227 13.9062 148.377 14.2634 147.738 14.9777C147.098 15.692 146.778 16.7783 146.778 18.2366V29.5312H140.565V18.0134C140.506 16.7336 140.165 15.7292 139.54 15C138.9 14.2708 138.072 13.9062 137.054 13.9062C136.037 13.9062 135.194 14.256 134.525 14.9554C133.857 15.6548 133.522 16.7485 133.522 18.2366Z" fill="white" />
                </svg>
                <div className="right-links flex">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                </div>
            </div>
            <button className="contact-btn">Contact us</button>
        </section>
    )
}
