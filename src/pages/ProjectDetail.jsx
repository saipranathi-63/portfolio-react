import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ProjectDetail() {
    const { projectId } = useParams();

    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchProject() {
            try {
                const response = await fetch(
                    `http://localhost:5000/api/projects/${projectId}`
                );

                if (response.status === 404) {
                    setError("Project Not Found");
                    return;
                }

                if (!response.ok) {
                    throw new Error(
                        "Failed to fetch project"
                    );
                }

                const data = await response.json();

                setProject(data);
            } catch (error) {
                setError(
                    "Unable to load project. Please make sure the backend server is running."
                );
            } finally {
                setLoading(false);
            }
        }

        fetchProject();
    }, [projectId]);

    if (loading) {
        return (
            <main>
                <section>
                    <h1>Loading project...</h1>
                </section>
            </main>
        );
    }

    if (error) {
        return (
            <main>
                <section>
                    <h1>{error}</h1>

                    <Link to="/projects">
                        Back to Projects
                    </Link>
                </section>
            </main>
        );
    }

    return (
        <main>
            <section>
                <h1>{project.title}</h1>

                <p>{project.description}</p>

                <h2>Technology Used</h2>

                <ul>
                    {project.techStack.map((technology) => (
                        <li key={technology}>
                            {technology}
                        </li>
                    ))}
                </ul>

                <br />

                <Link to="/projects">
                    <button className="secondary-btn">
                        BACK TO PROJECTS
                    </button>
                </Link>
            </section>
        </main>
    );
}

export default ProjectDetail;