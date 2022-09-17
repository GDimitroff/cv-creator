import { useState } from 'react';

import SectionHeader from './SectionHeader';
import SectionWrapper from '../UI/SectionWrapper';
import Interest from './Interest';
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
            <Interest title="music" text="Music" />
            <Interest title="cinema" text="Cinema" />
            <Interest title="travel" text="Travel" />
            <Interest title="puzzles" text="Puzzles" />
            <Interest title="cycling" text="Cycling" />
            <Interest title="gaming" text="Gaming" />
            <Interest title="fitness" text="Fitness" />
            <Interest title="photos" text="Photos" />
            <Interest title="sports" text="Sports" />
            <Interest title="books" text="Books" />
            <Interest title="cooking" text="Cooking" />
            <Interest title="art" text="Art" />
            <Interest title="craft" text="Craft" />
            <Interest title="love" text="Love" />
            <Interest title="mma" text="MMA" />
            <Interest title="hiking" text="Hiking" />
            <Interest title="fashion" text="Fashion" />
            <Interest title="code" text="Code" />
            <Interest title="cars" text="Cars" />
            <Interest title="sea" text="Sea" />
          </div>
        </SectionWrapper>
      )}
    </div>
  );
};

export default Interests;
