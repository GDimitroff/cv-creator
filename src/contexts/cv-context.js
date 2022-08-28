import React, { useState } from 'react';

import emptyCV from '../components/Utils/emptyCV';
import exampleCV from '../components/Utils/exampleCV';

const CVContext = React.createContext({
  cv: {},
  handleGeneralInfoChange: (e) => {},
  loadExample: () => {},
  reset: () => {},
});

export const CVContextProvider = (props) => {
  const [cv, setCv] = useState(emptyCV);

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
        loadExample,
        reset,
      }}>
      {props.children}
    </CVContext.Provider>
  );
};

export default CVContext;
