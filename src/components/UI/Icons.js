import {
  PlusCircleIcon,
  MinusCircleIcon,
  ChevronDoubleDownIcon,
  ChevronDoubleUpIcon,
} from '@heroicons/react/24/solid';
import classes from './Icons.module.css';

export const PlusIcon = (props) => {
  return <PlusCircleIcon onClick={props.onClick} className={classes.icon} />;
};

export const MinusIcon = (props) => {
  return <MinusCircleIcon onClick={props.onClick} className={classes.icon} />;
};

export const ChevronDownIcon = (props) => {
  return (
    <ChevronDoubleDownIcon onClick={props.onClick} className={classes.toggle} />
  );
};

export const ChevronUpIcon = (props) => {
  return (
    <ChevronDoubleUpIcon onClick={props.onClick} className={classes.toggle} />
  );
};
