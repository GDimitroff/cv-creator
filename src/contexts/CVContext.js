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
    case 'CHANGE_GENERAL_INFO': {
      return {
        ...cv,
        generalInfo: {
          ...cv.generalInfo,
          [action.name]: action.value,
        },
      };
    }
    case 'ADD_EDUCATION': {
      return {
        ...cv,
        education: [
          {
            id: uuidv4(),
            universityName: '',
            city: '',
            degree: '',
            subject: '',
            from: '',
            to: '',
          },
          ...cv.education,
        ],
      };
    }
    case 'DELETE_EDUCATION': {
      const updatedEducation = cv.education.filter((e) => e.id !== action.id);

      return {
        ...cv,
        education: updatedEducation,
      };
    }
    case 'CHANGE_EDUCATION': {
      const index = cv.education.findIndex((e) => e.id === action.education.id);
      const newEducations = [...cv.education];
      newEducations[index] = { ...cv.education[index], ...action.education };

      const newCV = {
        ...cv,
        education: newEducations,
      };

      return { ...newCV };
    }
    case 'ADD_EXPERIENCE': {
      return {
        ...cv,
        experience: [
          {
            id: uuidv4(),
            position: '',
            company: '',
            city: '',
            from: '',
            to: '',
            description: '',
          },
          ...cv.experience,
        ],
      };
    }
    case 'DELETE_EXPERIENCE': {
      const updatedExperience = cv.experience.filter((e) => e.id !== action.id);

      return {
        ...cv,
        experience: updatedExperience,
      };
    }
    case 'CHANGE_EXPERIENCE': {
      const index = cv.experience.findIndex(
        (e) => e.id === action.experience.id
      );

      const newExperience = [...cv.experience];
      newExperience[index] = { ...cv.experience[index], ...action.experience };

      const newCV = {
        ...cv,
        experience: newExperience,
      };

      return { ...newCV };
    }
    case 'ADD_SKILL': {
      return {
        ...cv,
        skills: [
          {
            id: uuidv4(),
            title: '',
            rating: '1',
          },
          ...cv.skills,
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
    case 'ADD_AWARD': {
      return {
        ...cv,
        awards: [
          {
            id: uuidv4(),
            title: '',
            organization: '',
            year: '',
          },
          ...cv.awards,
        ],
      };
    }
    case 'DELETE_AWARD': {
      const updatedAwards = cv.awards.filter((a) => a.id !== action.id);

      return {
        ...cv,
        awards: updatedAwards,
      };
    }
    case 'CHANGE_AWARD': {
      const index = cv.awards.findIndex((a) => a.id === action.award.id);
      const newAwards = [...cv.awards];
      newAwards[index] = { ...cv.awards[index], ...action.award };

      const newCV = {
        ...cv,
        awards: newAwards,
      };

      return { ...newCV };
    }
    case 'ADD_INTEREST': {
      return { ...cv, interests: [...cv.interests, action.title] };
    }
    case 'DELETE_INTEREST': {
      const updatedInterests = cv.interests.filter((i) => i !== action.title);

      return { ...cv, interests: updatedInterests };
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
