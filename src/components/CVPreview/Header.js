import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMap } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookSquare,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import classes from './Header.module.css';

const Header = ({ info }) => {
  return (
    <header className={classes.header}>
      <div className={classes.names}>
        <p>
          <span className={classes['first-name']}>{info.firstName}</span>{' '}
          <span className={classes['last-name']}>{info.lastName}</span>
        </p>
        <h4 className={classes.title}>{info.title}</h4>
      </div>
      <div className={classes.links}>
        <ul>
          <li>
            {info.phoneNumber}
            <FontAwesomeIcon icon={faPhone} />
          </li>
          <li>
            {info.email}
            <FontAwesomeIcon icon={faEnvelope} />
          </li>
          <li>
            {info.address}
            <FontAwesomeIcon icon={faMap} />
          </li>
          <li>
            {info.linkedIn}
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </li>
          <li>
            {info.facebook}
            <FontAwesomeIcon icon={faFacebookSquare} size="lg" />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
