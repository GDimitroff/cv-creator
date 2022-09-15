import { createContext, useContext, useReducer } from 'react';

import emptyCV from '../data/emptyCV';
import exampleCV from '../data/exampleCV';

const CVContext = createContext(null);
const CVDispatchContext = createContext(null);

export function CVProvider({ children }) {
  const [cv, dispatch] = useReducer(cvReducer, exampleCV);

  return (
    <CVContext.Provider value={cv}>
      <CVDispatchContext.Provider value={dispatch}>
        {children}
      </CVDispatchContext.Provider>
    </CVContext.Provider>
  );
}

export function useCV() {
  return useContext(CVContext);
}

export function useCVDispatch() {
  return useContext(CVDispatchContext);
}

function cvReducer(cv, action) {
  switch (action.type) {
    case 'CHANGE_GENERAL_INFO': {
      return {
        ...cv,
        generalInfo: {
          ...cv.generalInfo,
          [action.name]: action.value,
        },
      };
    }
    case 'CHANGE_SKILL': {
      const index = cv.skills.findIndex(
        (skill) => skill.id === action.skill.id
      );

      const newSkills = [...cv.skills];
      newSkills[index] = { ...cv.skills[index], ...action.skill };

      const newCV = {
        ...cv,
        skills: newSkills,
      };

      return { ...newCV };
    }
    case 'LOAD_EXAMPLE_CV': {
      return { ...exampleCV };
    }
    case 'LOAD_EMPTY_CV': {
      return { ...emptyCV };
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
