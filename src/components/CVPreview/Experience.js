import classes from './Experience.module.css';

const Experience = ({ experience }) => {
  const experienceList = experience.map((e) => {
    return (
      <div className={classes['experience-item']} key={e.id}>
        <p className={classes.date}>
          {e.from} - {e.to}
        </p>
        <h3 className={classes.position}>{e.position}</h3>
        <p className={classes.company}>
          {e.company}, {e.city}
        </p>
        <p className={classes.description}>{e.description}</p>
      </div>
    );
  });
  return (
    <div>
      <h2>Experience</h2>
      <div className={classes.experience}>{experienceList}</div>
    </div>
  );
};

export default Experience;
