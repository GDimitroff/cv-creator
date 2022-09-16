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
  experience: [
    {
      id: uuidv4(),
      position: 'Senior Web Developer',
      company: 'Facebook Inc.',
      city: 'Menlo Park',
      from: '2015',
      to: 'Present',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolores debitis, doloribus porro delectus velit.',
    },
    {
      id: uuidv4(),
      position: 'Junior Web Developer',
      company: 'Tesla Inc.',
      city: 'Palo Alto',
      from: '2012',
      to: '2015',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim velit beatae numquam obcaecati voluptatum modi.',
    },
    {
      id: uuidv4(),
      position: 'UI / UX Designer',
      company: 'Google LLC',
      city: 'Mountain View',
      from: '2010',
      to: '2012',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem doloremque explicabo delectus quidem minus obcaecati beatae odit exercitationem, vitae, nostrum voluptatibus repellendus amet maiores ea quas dolorem omnis deleniti porro.',
    },
  ],
  awards: [
    {
      id: uuidv4(),
      title: 'Man of the Year',
      organization: 'Time',
      year: '2022',
    },
    {
      id: uuidv4(),
      title: 'Most Motivated Employee',
      organization: 'Google LLC',
      year: '2021',
    },
  ],
};

export default exampleCV;
