import { NavLink } from "react-router-dom";

export function AppFooter() {
    return (
        <section className="footer flex space-between">
            <div className="logo-links-address flex">
                <div className="logo-and-links flex column space-between">
                    <svg width="160" height="40" viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M68.3174 29.5312V13.2143H72.6997V8.19196H68.3174V0H62.1474V8.19196H58.3538V13.2143H62.1474V29.5312H68.3174ZM6.21366 18.2366V29.5312H0V8.19196H6.21366V11.2946C6.72238 10.1935 7.44913 9.32292 8.3939 8.68304C9.41134 8.07292 10.5015 7.76786 11.6642 7.76786C14.9637 7.76786 17.1948 9.01786 18.3576 11.5179C19.8837 8.9881 21.9549 7.72321 24.5712 7.72321C27.1875 7.72321 29.186 8.56399 30.5669 10.2455C31.9477 11.9271 32.6381 14.3155 32.6381 17.4107V29.5312H26.4898V18.1473C26.4898 16.8378 26.1773 15.8036 25.5523 15.0446C24.8983 14.2857 24.0407 13.9062 22.9797 13.9062C21.9186 13.9062 21.0683 14.2634 20.4288 14.9777C19.7892 15.692 19.4695 16.7783 19.4695 18.2366V29.5312H13.2558V18.0134C13.1977 16.7336 12.8561 15.7292 12.2311 15C11.5916 14.2708 10.7631 13.9062 9.74564 13.9062C8.7282 13.9062 7.88517 14.256 7.21657 14.9554C6.54797 15.6548 6.21366 16.7485 6.21366 18.2366ZM57.4981 8.19196L44.6347 40H38.0722L43.0868 27.3438L35.0417 8.19196H41.6478L46.2481 20.2902L50.892 8.19196H57.4981ZM95.2923 25.6473C93.3591 28.5491 90.1833 29.9926 85.7646 29.9777C82.6978 29.9777 80.1106 28.9435 78.003 26.875C75.9245 24.7768 74.8853 22.0833 74.8853 18.7946C74.8853 15.506 75.9245 12.8348 78.003 10.7812C80.0815 8.72768 82.6542 7.70833 85.721 7.72321C88.7879 7.72321 91.3388 8.76488 93.3737 10.8482C95.4085 12.9315 96.4333 15.6399 96.4478 18.9732C96.4478 19.003 96.4187 19.6577 96.3606 20.9375H81.0771C81.1934 22.0685 81.7603 22.9464 82.7777 23.5714C83.7952 24.1964 84.9434 24.5089 86.2225 24.5089C88.2138 24.5089 89.7327 23.8393 90.7792 22.5L95.2923 25.6473ZM90.1905 16.9643H81.1644C81.3969 15.8036 81.9783 14.8958 82.9085 14.2411C83.8097 13.5863 84.7835 13.2738 85.83 13.3036C86.8766 13.3333 87.8286 13.6607 88.6862 14.2857C89.5437 14.9107 90.0452 15.8036 90.1905 16.9643ZM113.088 29.2188C111.911 29.7247 110.785 29.9628 109.709 29.933C106.846 29.933 104.36 28.9062 102.253 26.8527C100.145 24.7991 99.0912 22.128 99.0912 18.8393C99.0912 15.5506 100.181 12.8795 102.362 10.8259C104.542 8.77232 106.991 7.7381 109.709 7.72321C110.814 7.72321 111.947 7.96875 113.11 8.45982C114.273 8.95089 115.167 9.6503 115.792 10.558V8.19196H121.94V29.5312H115.792V27.0982C115.167 28.006 114.266 28.7128 113.088 29.2188ZM110.712 23.9062C109.302 23.9062 108.088 23.4301 107.071 22.4777C106.024 21.5253 105.501 20.3199 105.501 18.8616C105.501 17.4182 106.024 16.2054 107.071 15.2232C108.205 14.256 109.447 13.7723 110.799 13.7723C112.151 13.7723 113.321 14.2485 114.309 15.2009C115.298 16.1533 115.792 17.3735 115.792 18.8616C115.792 20.3497 115.298 21.5625 114.309 22.5C113.321 23.4375 112.122 23.9062 110.712 23.9062ZM133.522 18.2366V29.5312H127.309V8.19196H133.522V11.2946C134.031 10.1935 134.758 9.32292 135.703 8.68304C136.72 8.07292 137.81 7.76786 138.973 7.76786C142.272 7.76786 144.504 9.01786 145.666 11.5179C147.193 8.9881 149.264 7.72321 151.88 7.72321C154.496 7.72321 156.495 8.56399 157.876 10.2455C159.256 11.9271 159.947 14.3155 159.947 17.4107V29.5312H153.799V18.1473C153.799 16.8378 153.486 15.8036 152.861 15.0446C152.207 14.2857 151.35 13.9062 150.288 13.9062C149.227 13.9062 148.377 14.2634 147.738 14.9777C147.098 15.692 146.778 16.7783 146.778 18.2366V29.5312H140.565V18.0134C140.506 16.7336 140.165 15.7292 139.54 15C138.9 14.2708 138.072 13.9062 137.054 13.9062C136.037 13.9062 135.194 14.256 134.525 14.9554C133.857 15.6548 133.522 16.7485 133.522 18.2366Z" fill="white" />
                    </svg>
                    <div className="links flex">
                        <NavLink to="/"><a>Home</a></NavLink>
                        <NavLink to="/about"><a>About</a></NavLink>
                    </div>
                </div>
                <p>
                    987  Hillcrest Lane<br/>
                    Irvine, CA<br/>
                    California 92714<br/>
                    Call Us : 949-833-7432 
                </p>
            </div>
            <div className="media-and-pre flex column space-between">
                <div className="icons flex">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.675 0H1.325C0.593 0 0 0.593 0 1.325V22.676C0 23.407 0.593 24 1.325 24H12.82V14.706H9.692V11.084H12.82V8.413C12.82 5.313 14.713 3.625 17.479 3.625C18.804 3.625 19.942 3.724 20.274 3.768V7.008L18.356 7.009C16.852 7.009 16.561 7.724 16.561 8.772V11.085H20.148L19.681 14.707H16.561V24H22.677C23.407 24 24 23.407 24 22.675V1.325C24 0.593 23.407 0 22.675 0Z" fill="white" />
                    </svg>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="Path" d="M12 0C5.373 0 0 5.372 0 12C0 17.084 3.163 21.426 7.627 23.174C7.522 22.225 7.427 20.769 7.669 19.733C7.887 18.796 9.076 13.768 9.076 13.768C9.076 13.768 8.717 13.049 8.717 11.986C8.717 10.318 9.684 9.072 10.888 9.072C11.911 9.072 12.406 9.841 12.406 10.762C12.406 11.791 11.751 13.33 11.412 14.757C11.129 15.951 12.011 16.926 13.189 16.926C15.322 16.926 16.961 14.677 16.961 11.431C16.961 8.558 14.897 6.549 11.949 6.549C8.535 6.549 6.531 9.11 6.531 11.756C6.531 12.787 6.928 13.894 7.424 14.494C7.522 14.613 7.536 14.718 7.507 14.839L7.174 16.199C7.121 16.419 7 16.466 6.772 16.36C5.273 15.662 4.336 13.471 4.336 11.711C4.336 7.926 7.086 4.449 12.265 4.449C16.428 4.449 19.663 7.416 19.663 11.38C19.663 15.516 17.056 18.844 13.436 18.844C12.22 18.844 11.077 18.213 10.686 17.466L9.938 20.319C9.667 21.362 8.936 22.669 8.446 23.465C9.57 23.812 10.763 24 12 24C18.627 24 24 18.627 24 12C24 5.372 18.627 0 12 0Z" fill="white" />
                    </svg>
                    <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="Path" d="M24 2.55699C23.117 2.94899 22.168 3.21299 21.172 3.33199C22.189 2.72299 22.97 1.75799 23.337 0.607986C22.386 1.17199 21.332 1.58199 20.21 1.80299C19.313 0.845986 18.032 0.247986 16.616 0.247986C13.437 0.247986 11.101 3.21399 11.819 6.29299C7.728 6.08799 4.1 4.12799 1.671 1.14899C0.381 3.36199 1.002 6.25699 3.194 7.72299C2.388 7.69699 1.628 7.47599 0.965 7.10699C0.911 9.38799 2.546 11.522 4.914 11.997C4.221 12.185 3.462 12.229 2.69 12.081C3.316 14.037 5.134 15.46 7.29 15.5C5.22 17.123 2.612 17.848 0 17.54C2.179 18.937 4.768 19.752 7.548 19.752C16.69 19.752 21.855 12.031 21.543 5.10599C22.505 4.41099 23.34 3.54399 24 2.55699Z" fill="white" />
                    </svg>
                </div>
                <pre>Copyright 2020. All Rights Reserved</pre>
            </div>
        </section>
    )
}