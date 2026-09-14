import { Link } from "react-router-dom";

function NotFound() {
    return (
        <main>
            <section>
                <h1>404</h1>

                <h2>Page Not Found</h2>

                <p>
                    The page you are looking for does not
                    exist.
                </p>

                <Link to="/Home">
                    <button className="primary-btn">
                        BACK TO HOME
                    </button>
                </Link>
            </section>
        </main>
    );
}

export default NotFound;