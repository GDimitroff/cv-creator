import { v4 as uuidv4 } from 'uuid';

const emptyCV = {
  generalInfo: {
    firstName: '',
    lastName: '',
    title: '',
    address: '',
    phoneNumber: '',
    email: '',
    description: '',
    linkedIn: '',
    facebook: '',
  },
  skills: [
    {
      id: uuidv4(),
      title: '',
      rating: '',
    },
  ],
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
  ],
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
  ],
  awards: [
    {
      id: uuidv4(),
      title: '',
      organization: '',
      year: '',
    },
  ],
  interests: [],
};

export default emptyCV;
