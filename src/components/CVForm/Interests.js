import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMusic,
  faTv,
  faPlaneDeparture,
  faPuzzlePiece,
  faPersonBiking,
  faGamepad,
  faDumbbell,
  faCamera,
  faFutbol,
  faBook,
  faUtensils,
  faPaintBrush,
  faPenRuler,
  faHeart,
  faUserNinja,
  faPersonHiking,
  faCode,
  faCar,
  faWater,
} from '@fortawesome/free-solid-svg-icons';
import { faBlackTie } from '@fortawesome/free-brands-svg-icons';

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
              <div className={`${classes['icon-wrapper']} ${classes.selected}`}>
                <FontAwesomeIcon icon={faMusic} size="md" />
              </div>
              <p className={classes.title}>Music</p>
            </div>
            <div className={classes.panel}>
              <div className={classes['icon-wrapper']}>
                <FontAwesomeIcon icon={faTv} size="md" />
              </div>
              <p className={classes.title}>Cinema</p>
            </div>
            <div className={classes.panel}>
              <div className={`${classes['icon-wrapper']} ${classes.selected}`}>
                <FontAwesomeIcon icon={faPlaneDeparture} size="md" />
              </div>
              <p className={classes.title}>Travel</p>
            </div>
            <div className={classes.panel}>
              <div className={classes['icon-wrapper']}>
                <FontAwesomeIcon icon={faPuzzlePiece} size="md" />
              </div>
              <p className={classes.title}>Puzzles</p>
            </div>
            <div className={classes.panel}>
              <div className={classes['icon-wrapper']}>
                <FontAwesomeIcon icon={faPersonBiking} size="md" />
              </div>
              <p className={classes.title}>Cycling</p>
            </div>
            <div className={classes.panel}>
              <div className={classes['icon-wrapper']}>
                <FontAwesomeIcon icon={faGamepad} size="md" />
              </div>
              <p className={classes.title}>Gaming</p>
            </div>
            <div className={classes.panel}>
              <div className={`${classes['icon-wrapper']} ${classes.selected}`}>
                <FontAwesomeIcon icon={faDumbbell} size="md" />
              </div>
              <p className={classes.title}>Fitness</p>
            </div>
            <div className={classes.panel}>
              <div className={classes['icon-wrapper']}>
                <FontAwesomeIcon icon={faCamera} size="md" />
              </div>
              <p className={classes.title}>Photos</p>
            </div>
            <div className={classes.panel}>
              <div className={classes['icon-wrapper']}>
                <FontAwesomeIcon icon={faFutbol} size="md" />
              </div>
              <p className={classes.title}>Sports</p>
            </div>
            <div className={classes.panel}>
              <div className={classes['icon-wrapper']}>
                <FontAwesomeIcon icon={faBook} size="md" />
              </div>
              <p className={classes.title}>Books</p>
            </div>
            <div className={classes.panel}>
              <div className={classes['icon-wrapper']}>
                <FontAwesomeIcon icon={faUtensils} size="md" />
              </div>
              <p className={classes.title}>Cooking</p>
            </div>
            <div className={classes.panel}>
              <div className={classes['icon-wrapper']}>
                <FontAwesomeIcon icon={faPaintBrush} size="md" />
              </div>
              <p className={classes.title}>Art</p>
            </div>
            <div className={classes.panel}>
              <div className={classes['icon-wrapper']}>
                <FontAwesomeIcon icon={faPenRuler} size="md" />
              </div>
              <p className={classes.title}>Craft</p>
            </div>
            <div className={classes.panel}>
              <div className={classes['icon-wrapper']}>
                <FontAwesomeIcon icon={faHeart} size="md" />
              </div>
              <p className={classes.title}>Love</p>
            </div>
            <div className={classes.panel}>
              <div className={classes['icon-wrapper']}>
                <FontAwesomeIcon icon={faUserNinja} size="md" />
              </div>
              <p className={classes.title}>MMA</p>
            </div>
            <div className={classes.panel}>
              <div className={classes['icon-wrapper']}>
                <FontAwesomeIcon icon={faPersonHiking} size="md" />
              </div>
              <p className={classes.title}>Hiking</p>
            </div>
            <div className={classes.panel}>
              <div className={classes['icon-wrapper']}>
                <FontAwesomeIcon icon={faBlackTie} size="md" />
              </div>
              <p className={classes.title}>Fashion</p>
            </div>
            <div className={classes.panel}>
              <div className={classes['icon-wrapper']}>
                <FontAwesomeIcon icon={faCode} size="md" />
              </div>
              <p className={classes.title}>Code</p>
            </div>
            <div className={classes.panel}>
              <div className={classes['icon-wrapper']}>
                <FontAwesomeIcon icon={faCar} size="md" />
              </div>
              <p className={classes.title}>Cars</p>
            </div>
            <div className={classes.panel}>
              <div className={classes['icon-wrapper']}>
                <FontAwesomeIcon icon={faWater} size="md" />
              </div>
              <p className={classes.title}>Sea</p>
            </div>
          </div>
        </SectionWrapper>
      )}
    </div>
  );
};

export default Interests;
