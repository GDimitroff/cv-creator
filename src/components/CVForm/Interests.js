import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import SectionHeader from './SectionHeader';
import SectionWrapper from '../UI/SectionWrapper';
import classes from './Interests.module.css';

const Interests = () => {
  const [isShown, setIsShown] = useState(false);

  const handleToggleSection = () => {
    setIsShown((prevIsShown) => !prevIsShown);
  };

  return (
    <div>
      <SectionHeader
        text="Interests"
        onToggleSection={handleToggleSection}
        isShown={isShown}
      />
      {isShown && (
        <SectionWrapper>
          <div className={classes.interests}>
            <div className={classes.panel}>
              <div className={`${classes['icon-wrapper']} ${classes.active}`}>
                <FontAwesomeIcon icon={faCoffee} size='xs'/>
              </div>
              <p className={classes.title}>Music</p>
            </div>
            <div className={classes.panel}>
              <div className={classes['icon-wrapper']}>
                <FontAwesomeIcon icon="fa-solid fa-headphones" />
              </div>
              <p className={classes.title}>Cinema</p>
            </div>
            <div className={classes.panel}>
              <div className={classes['icon-wrapper']}>
                <FontAwesomeIcon icon="fa-solid fa-headphones" />
              </div>
              <p className={classes.title}>Travel</p>
            </div>
            <div className={classes.panel}>
              <div className={classes['icon-wrapper']}>
                <FontAwesomeIcon icon="fa-solid fa-headphones" />
              </div>
              <p className={classes.title}>Puzzles</p>
            </div>
            <div className={classes.panel}>
              <div className={classes['icon-wrapper']}>
                <FontAwesomeIcon icon="fa-solid fa-headphones" />
              </div>
              <p className={classes.title}>Music</p>
            </div>
            <div className={classes.panel}>
              <div className={classes['icon-wrapper']}>
                <FontAwesomeIcon icon="fa-solid fa-headphones" />
              </div>
              <p className={classes.title}>Music</p>
            </div>
            <div className={classes.panel}>
              <div className={classes['icon-wrapper']}>
                <FontAwesomeIcon icon="fa-solid fa-headphones" />
              </div>
              <p className={classes.title}>Music</p>
            </div>
            <div className={classes.panel}>
              <div className={classes['icon-wrapper']}>
                <FontAwesomeIcon icon="fa-solid fa-headphones" />
              </div>
              <p className={classes.title}>Music</p>
            </div>
            <div className={classes.panel}>
              <div className={classes['icon-wrapper']}>
                <FontAwesomeIcon icon="fa-solid fa-headphones" />
              </div>
              <p className={classes.title}>Music</p>
            </div>
            <div className={classes.panel}>
              <div className={classes['icon-wrapper']}>
                <FontAwesomeIcon icon="fa-solid fa-headphones" />
              </div>
              <p className={classes.title}>Music</p>
            </div>
            <div className={classes.panel}>
              <div className={classes['icon-wrapper']}>
                <FontAwesomeIcon icon="fa-solid fa-headphones" />
              </div>
              <p className={classes.title}>Music</p>
            </div>
            <div className={classes.panel}>
              <div className={classes['icon-wrapper']}>
                <FontAwesomeIcon icon="fa-solid fa-headphones" />
              </div>
              <p className={classes.title}>Music</p>
            </div>
            <div className={classes.panel}>
              <div className={classes['icon-wrapper']}>
                <FontAwesomeIcon icon="fa-solid fa-headphones" />
              </div>
              <p className={classes.title}>Music</p>
            </div>
          </div>
        </SectionWrapper>
      )}
    </div>
  );
};

export default Interests;
