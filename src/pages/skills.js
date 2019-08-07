import React from 'react';
import '../scss/skills.scss';
import { graphql, useStaticQuery } from 'gatsby';

const SkillsPage = () => {
  const {
    contentfulSkills: { skills },
  } = useStaticQuery(
    graphql`
      query {
        contentfulSkills {
          skills {
            data
            id
          }
        }
      }
    `,
  );

  return (
    <section className="skills">
      <h2>&gt; Primary Skills</h2>
      <ul className="skills__list">
        {skills.map(skill => (
          <li key={skill.id}>{skill.data}</li>
        ))}
      </ul>
    </section>
  );
};

export default SkillsPage;
