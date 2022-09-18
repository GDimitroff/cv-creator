import classes from './GeneralInfo.module.css';

const GeneralInfo = ({ generalInfo }) => {
  return (
    <div className={classes.profile}>
      <h2>Profile</h2>
      <p>{generalInfo.description}</p>
    </div>
  );
};

export default GeneralInfo;
