import { NavLink } from "react-router-dom";
export function AppHeader() {
return (
    <section className="app-header">
        <div className="logo">
    <h1>MyTeam</h1>
        </div>
        <div className="right-links">
            <NavLink>Home</NavLink>
        <NavLink>About</NavLink>
        </div>
        <button>
            Contact us
        </button>
    </section>
)
}