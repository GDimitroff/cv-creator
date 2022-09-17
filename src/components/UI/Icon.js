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
  faCircleMinus,
  faCirclePlus,
  faAngleDoubleDown,
  faAngleDoubleUp,
  faPhone,
  faEnvelope,
  faMap,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import {
  faBlackTie,
  faFacebookSquare,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faStar as faEmptyStar } from '@fortawesome/free-regular-svg-icons';
import classes from './Icon.module.css';

const icons = {
  music: faMusic,
  cinema: faTv,
  travel: faPlaneDeparture,
  puzzles: faPuzzlePiece,
  cycling: faPersonBiking,
  gaming: faGamepad,
  fitness: faDumbbell,
  photos: faCamera,
  sports: faFutbol,
  books: faBook,
  cooking: faUtensils,
  art: faPaintBrush,
  craft: faPenRuler,
  love: faHeart,
  mma: faUserNinja,
  hiking: faPersonHiking,
  code: faCode,
  cars: faCar,
  sea: faWater,
  fashion: faBlackTie,
  minus: faCircleMinus,
  plus: faCirclePlus,
  angleDown: faAngleDoubleDown,
  angleUp: faAngleDoubleUp,
  phone: faPhone,
  email: faEnvelope,
  map: faMap,
  linkedin: faLinkedin,
  facebook: faFacebookSquare,
  star: faStar,
  emptyStar: faEmptyStar,
};

const Icon = ({ className, iconName, size = '1x', onClick, link }) => {
  const classList = `${classes[className]} ${link ? classes.link : ''}`;

  return (
    <FontAwesomeIcon
      icon={icons[iconName]}
      size={size}
      className={classList}
      onClick={onClick}
    />
  );
};

export default Icon;
