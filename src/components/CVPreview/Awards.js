import classes from './Awards.module.css';

const Awards = ({ awards }) => {
  const awardsList = awards.map((award) => {
    return (
      <div key={award.id}>
        <h3 className={classes.title}>{award.title}</h3>
        <p className={classes.organization}>{award.organization}</p>
        <p className={classes.year}>{award.year}</p>
      </div>
    );
  });

  return (
    <div>
      <h2>Awards</h2>
      <div className={classes.awards}>{awardsList}</div>
    </div>
  );
};

export default Awards;
