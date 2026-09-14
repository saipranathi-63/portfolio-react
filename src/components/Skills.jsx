function SkillCard({ name, image }) {
    return (
        <div className="skill-card">
            <img
                src={image}
                alt={`${name} logo`}
            />

            <p>{name}</p>
        </div>
    );
}

function Skills({ skills }) {
    const repeatedSkills = [...skills, ...skills];

    return (
        <section className="skills">
            <h2>Skills</h2>

            <div className="skills-slider">
                <div className="skills-track">
                    {repeatedSkills.map((skill, index) => (
                        <SkillCard
                            key={`${skill.name}-${index}`}
                            name={skill.name}
                            image={skill.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;