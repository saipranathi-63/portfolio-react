import { NavLink } from "react-router-dom";

function Navbar({ theme, setTheme }) {
    return (
        <header>
            <div>PORTFOLIO</div>

            <nav aria-label="Main navigation">
                <ul>
                    <li>
                        <NavLink to="/Home">
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/about">
                            About
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/experience">
                            Experience
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/skills">
                            Skills
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/projects">
                            Projects
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/contact">
                            Contact
                        </NavLink>
                    </li>

                    <li>
                        <button
                            type="button"
                            className="theme-button"
                            onClick={() =>
                                setTheme(
                                    theme === "dark"
                                        ? "light"
                                        : "dark"
                                )
                            }
                            aria-label={`Switch to ${
                                theme === "dark"
                                    ? "light"
                                    : "dark"
                            } theme`}
                        >
                            {theme === "dark"
                                ? "☀️"
                                : "🌙"}
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;