import React from 'react';
import '../scss/skills.scss';
import { graphql, useStaticQuery } from 'gatsby';

const SkillsPage = () => {
  const {
    contentfulSkills: {
      skills: { list },
    },
  } = useStaticQuery(
    graphql`
      query {
        contentfulSkills {
          skills {
            list {
              name
              data
            }
          }
        }
      }
    `,
  );

  return (
    <section className="skills">
      <h2>&gt; Skills</h2>
      <ul className="skills__categories-list">
        {list.map(category => (
          <div key={category.name}>
            <h3>{category.name}</h3>
            <ul>
              {category.data.map(skill => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </ul>
    </section>
  );
};

export default SkillsPage;
