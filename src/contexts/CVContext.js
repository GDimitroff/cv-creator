import { createContext, useContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

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
    case 'ADD_SKILL': {
      return {
        ...cv,
        skills: [
          ...cv.skills,
          {
            id: uuidv4(),
            title: '',
            rating: '',
          },
        ],
      };
    }
    case 'DELETE_SKILL': {
      const updatedSkills = cv.skills.filter((s) => s.id !== action.id);

      return {
        ...cv,
        skills: updatedSkills,
      };
    }
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
      const index = cv.skills.findIndex((s) => s.id === action.skill.id);
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
