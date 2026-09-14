import { useEffect, useState } from "react";
import Skills from "../components/Skills";

function Home({ skills }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    if (loading) {
        return (
            <main>
                <section className="hero loading-screen">
                    <h2>Loading...</h2>
                </section>
            </main>
        );
    }

    return (
        <main>
            <section className="hero">
                <div className="hero-left">
                    <h1>
                        Hi, I'm{" "}
                        <span>Sai Pranathi</span>
                    </h1>

                    <p>
                        A passionate software developer and
                        problem solver.
                    </p>

                    <div className="social-links">
                        <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>

                        <a
                            href="https://linkedin.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn
                        </a>
                    </div>

                    <div className="button-group">
                        <a
                            href="/assets/documents/resume.pdf"
                            download
                        >
                            <button className="primary-btn">
                                DOWNLOAD RESUME
                            </button>
                        </a>

                        <a href="/contact">
                            <button className="secondary-btn">
                                CONTACT ME
                            </button>
                        </a>
                    </div>
                </div>

                <div className="hero-right">
    <div className="code-box">
        <div className="window-buttons">
            <span className="red"></span>
            <span className="yellow"></span>
            <span className="green"></span>
        </div>

        <code>
            <div>
                <span className="pink-text">const</span>

                <span className="white-text">coder</span>

                <span className="pink-text"> = </span>

                <span className="grey-text">{"{"}</span>
            </div>

            <div>
                <span className="white-text">name:</span>

                <span className="grey-text">'</span>

                <span className="amber-text">
                    Sai Pranathi
                </span>

                <span className="grey-text">',</span>
            </div>

            <div>
                <span className="white-text">skills:</span>

                <span className="grey-text">['</span>

                <span className="amber-text">C++</span>

                <span className="grey-text">', '</span>

                <span className="amber-text">Java</span>

                <span className="grey-text">', '</span>

                <span className="amber-text">
                    JavaScript
                </span>

                <span className="grey-text">', '</span>

                <span className="amber-text">React</span>

                <span className="grey-text">', '</span>

                <span className="amber-text">Next.js</span>

                <span className="grey-text">', '</span>

                <span className="amber-text">MySQL</span>

                <span className="grey-text">'],</span>
            </div>

            <div>
                <span className="white-text">
                    hardWorker:
                </span>

                <span className="orange-text">true</span>

                <span className="grey-text">,</span>
            </div>

            <div>
                <span className="white-text">
                    quickLearner:
                </span>

                <span className="orange-text">true</span>

                <span className="grey-text">,</span>
            </div>

            <div>
                <span className="white-text">
                    problemSolver:
                </span>

                <span className="orange-text">true</span>

                <span className="grey-text">,</span>
            </div>

            <div>
                <span className="green-text">
                    hireable:
                </span>

                <span className="orange-text">
                    function
                </span>

                <span className="grey-text">() {"{"}</span>
            </div>

            <div>
                <span className="orange-text">
                    return
                </span>

                <span className="grey-text">(</span>
            </div>

            <div>
                <span className="cyan-text">this.</span>

                <span className="white-text">
                    hardWorker
                </span>

                <span className="amber-text">
                    {" &&"}
                </span>
            </div>

            <div>
                <span className="cyan-text">this.</span>

                <span className="white-text">
                    problemSolver
                </span>

                <span className="amber-text">
                    {" &&"}
                </span>
            </div>

            <div>
                <span className="cyan-text">this.</span>

                <span className="white-text">
                    skills.length
                </span>

                <span className="amber-text">
                    {" >= "}
                </span>

                <span className="orange-text">5</span>
            </div>

            <div>
                <span className="grey-text">);</span>
            </div>

            <div>
                <span className="grey-text">{"}"}</span>
            </div>

            <div>
                <span className="grey-text">{"}"}</span>
            </div>
        </code>
    </div>
</div>
            </section>

            <section className="about">
                <h2>WHO I AM?</h2>

                <div>
                    <div>
                        <p>
                            My name is Sai Pranathi Vanaparthi.
                            I am a passionate software developer
                            and problem solver.
                        </p>

                        <p>
                            I enjoy learning new technologies,
                            building full-stack web applications,
                            and solving challenging algorithmic
                            problems.
                        </p>
                    </div>
                </div>
            </section>

            <section className="experience">
                <span>Experience</span>

                <article className="experience-item">
                    <div>
                        <p>(May 2027 - Jul 2027)</p>

                        <h2>Software Engineer I</h2>

                        <h3>XXXX Private Ltd.</h3>
                    </div>
                </article>
            </section>

            <Skills skills={skills} />
        </main>
    );
}

export default Home;