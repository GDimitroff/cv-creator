import classes from './Skills.module.css';

//TODO: icons
const Skills = ({ skills }) => {
  const rating = skills.map((skill) => {
    return (
      <li className={classes.rating} key={skill.id}>
        <p>{skill.title}</p>
        {/* <div>{getStars(skill.rating)}</div> */}
      </li>
    );
  });

  // function getStars(rating) {
  //   const stars = [];
  //   for (let i = 1; i <= 10; i++) {
  //     if (i <= rating) {
  //       stars.push(<StarIcon className={classes.icon} key={i} />);
  //     } else {
  //       stars.push(<EmptyStar className={classes.icon} key={i} />);
  //     }
  //   }

  //   return stars;
  // }

  return (
    <div>
      <h2>Skills</h2>
      <ul className={classes.skills}>{rating}</ul>
    </div>
  );
};

export default Skills;
