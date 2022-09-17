import Icon from '../UI/Icon';
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
            <Icon iconName="phone" size="1x" className="dark" link={false} />
          </li>
          <li>
            {info.email}
            <Icon iconName="email" size="1x" className="dark" link={false} />
          </li>
          <li>
            {info.address}
            <Icon iconName="map" size="1x" className="dark" link={false} />
          </li>
          <li>
            {info.linkedIn}
            <Icon iconName="linkedin" size="lg" className="dark" link={false} />
          </li>
          <li>
            {info.facebook}
            <Icon iconName="facebook" size="lg" className="dark" link={false} />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
