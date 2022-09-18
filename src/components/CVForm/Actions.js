import { useCVDispatch } from '../../contexts/CVContext';

import Button from '../UI/Button';
import classes from './Actions.module.css';

const Actions = () => {
  const dispatch = useCVDispatch();

  return (
    <div className={classes.actions}>
      <Button
        onClick={() => dispatch({ type: 'LOAD_EXAMPLE_CV' })}
        text="Load Example"
        className="action"
      />
      <Button
        onClick={() => dispatch({ type: 'LOAD_EMPTY_CV' })}
        text="Clear"
        className="action"
      />
    </div>
  );
};

export default Actions;
