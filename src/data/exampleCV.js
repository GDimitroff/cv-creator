import { v4 as uuidv4 } from 'uuid';

const exampleCV = {
  generalInfo: {
    firstName: 'John',
    lastName: 'Smith',
    title: 'Fullstack Developer',
    address: 'Example Street 10',
    phoneNumber: '+000 123456789',
    email: 'youremail@email.com',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed vestibulum. Donec gravida, nulla eget blandit fermentum, mauris nisi rutrum libero, ac pharetra erat est sit amet tellus. Quisque fermentum dolor a interdum fermentum. Maecenas vehicula ac ipsum nec gravida. Integer quis porta turpis. Aenean et metus.',
    linkedIn: 'LinkedIn.com/username',
    facebook: 'Facebook.com/username',
  },
  skills: [
    {
      id: uuidv4(),
      title: 'JavaScript',
      rating: 8,
    },
    {
      id: uuidv4(),
      title: 'CSS',
      rating: 9,
    },
    {
      id: uuidv4(),
      title: 'HTML',
      rating: 9,
    },
  ],
  experience: [
    {
      id: uuidv4(),
      position: 'Senior Web Developer',
      company: 'Facebook Inc.',
      city: 'Menlo Park',
      from: '2015',
      to: 'Present',
    },
    {
      id: uuidv4(),
      position: 'Junior Web Developer',
      company: 'Tesla Inc.',
      city: 'Palo Alto',
      from: '2012',
      to: '2015',
    },
    {
      id: uuidv4(),
      position: 'UI / UX Designer',
      company: 'Google LLC',
      city: 'Mountain View',
      from: '2010',
      to: '2012',
    },
    {
      id: uuidv4(),
      position: 'Position',
      company: 'Company name',
      city: 'City name',
      from: 'From',
      to: 'To',
    },
  ],
  education: [
    {
      id: uuidv4(),
      universityName: 'University of Technology',
      city: 'Oklahoma',
      degree: 'Master',
      subject: 'Science',
      from: '2008',
      to: '2010',
    },
    {
      id: uuidv4(),
      universityName: 'University of Design Art',
      city: 'New York',
      degree: 'Bachelor',
      subject: 'Visual Art',
      from: '2005',
      to: '2008',
    },
    {
      id: uuidv4(),
      universityName: 'Massachusetts Institute of Technology',
      city: 'Massachusetts',
      degree: 'Master',
      subject: 'Computer Science',
      from: '2000',
      to: '2004',
    },
  ],
};

export default exampleCV;