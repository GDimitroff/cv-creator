import React, { useState } from 'react';

import emptyCV from '../data/emptyCV';
import exampleCV from '../data/exampleCV';

const CVContext = React.createContext({
  cv: {},
  handleGeneralInfoChange: (e) => {},
  handleSkillNameChange: (e) => {},
  loadExample: () => {},
  reset: () => {},
});

export const CVContextProvider = (props) => {
  const [cv, setCv] = useState(exampleCV);

  const handleGeneralInfoChange = (e) => {
    const { name, value } = e.target;

    setCv((prevCv) => ({
      ...prevCv,
      generalInfo: {
        ...prevCv.generalInfo,
        [name]: value,
      },
    }));
  };

  const handleSkillNameChange = (e) => {
    console.log(e.target.value);
  }

  const loadExample = () => {
    setCv(exampleCV);
  };

  const reset = () => {
    setCv(emptyCV);
  };

  return (
    <CVContext.Provider
      value={{
        cv,
        handleGeneralInfoChange,
        handleSkillNameChange,
        loadExample,
        reset,
      }}>
      {props.children}
    </CVContext.Provider>
  );
};

export default CVContext;
