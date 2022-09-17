import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as EmptyStar } from '@fortawesome/free-regular-svg-icons';
import classes from './Skills.module.css';

const Skills = ({ skills }) => {
  const rating = skills.map((skill) => {
    return (
      <li className={classes.rating} key={skill.id}>
        <p>{skill.title}</p>
        <div>{getStars(skill.rating)}</div>
      </li>
    );
  });

  function getStars(rating) {
    const stars = [];
    for (let i = 1; i <= 10; i++) {
      if (i <= rating) {
        stars.push(<FontAwesomeIcon icon={faStar} key={i} size="sm" />);
      } else {
        stars.push(<FontAwesomeIcon icon={EmptyStar} key={i} size="sm" />);
      }
    }

    return stars;
  }

  return (
    <div>
      <h2>Skills</h2>
      <ul className={classes.skills}>{rating}</ul>
    </div>
  );
};

export default Skills;
