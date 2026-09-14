import { useEffect, useState } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import SkillsPage from "./pages/SkillsPage";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import skills from "./data/skills";

function App() {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem("theme");

        return savedTheme || "dark";
    });

    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.body.className = theme;
    }, [theme]);

    return (
        <BrowserRouter>
            <div className={`app ${theme}`}>
                <Navbar
                    theme={theme}
                    setTheme={setTheme}
                />

                <Routes>
                    <Route
                        path="/"
                        element={
                            <Navigate
                                to="/Home"
                                replace
                            />
                        }
                    />

                    <Route
                        path="/Home"
                        element={
                            <Home
                                skills={skills}
                            />
                        }
                    />

                    <Route
                        path="/about"
                        element={<About />}
                    />

                    <Route
                        path="/experience"
                        element={<Experience />}
                    />

                    <Route
                        path="/skills"
                        element={
                            <SkillsPage
                                skills={skills}
                            />
                        }
                    />

                    <Route
                        path="/projects"
                        element={<Projects />}
                    />

                    <Route
                        path="/projects/:projectId"
                        element={<ProjectDetail />}
                    />

                    <Route
                        path="/contact"
                        element={<Contact />}
                    />

                    <Route
                        path="*"
                        element={<NotFound />}
                    />
                </Routes>

                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;