import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";

function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchProjects() {
            try {
                const response = await fetch(
                    "http://localhost:5000/api/projects"
                );

                if (!response.ok) {
                    throw new Error(
                        "Failed to fetch projects"
                    );
                }

                const data = await response.json();

                setProjects(data);
            } catch (error) {
                setError(
                    "Unable to load projects. Please make sure the backend server is running."
                );
            } finally {
                setLoading(false);
            }
        }

        fetchProjects();
    }, []);

    if (loading) {
        return (
            <main>
                <section className="projects">
                    <h1>Projects</h1>

                    <p>Loading projects...</p>
                </section>
            </main>
        );
    }

    if (error) {
        return (
            <main>
                <section className="projects">
                    <h1>Projects</h1>

                    <p>{error}</p>
                </section>
            </main>
        );
    }

    return (
        <main>
            <section className="projects">
                <h1>Projects</h1>

                <div className="project-grid">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            id={project.id}
                            title={project.title}
                            description={project.description}
                            techStack={project.techStack}
                            image={project.image}
                            link={project.link}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Projects;