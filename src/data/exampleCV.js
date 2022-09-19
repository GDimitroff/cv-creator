import { v4 as uuidv4 } from 'uuid';

const exampleCV = {
  generalInfo: {
    firstName: 'Bruce',
    lastName: 'Wayne',
    title: 'Hidden Hero',
    address: '1007 Mountain Drive, Gotham',
    phoneNumber: '+000 123456789',
    email: 'iambatman@waynecorp.com',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed vestibulum. Donec gravida, nulla eget blandit fermentum, mauris nisi rutrum libero, ac pharetra erat est sit amet tellus. Quisque fermentum dolor a interdum fermentum. Maecenas vehicula ac ipsum nec gravida. Integer quis porta turpis. Aenean et metus.',
    linkedIn: 'LinkedIn.com/BruceWayne',
    facebook: 'Facebook.com/BruceWayne',
  },
  skills: [
    {
      id: uuidv4(),
      title: 'Intellect',
      rating: 10,
    },
    {
      id: uuidv4(),
      title: 'Martial artist',
      rating: 10,
    },
    {
      id: uuidv4(),
      title: 'Tactician',
      rating: 10,
    },
  ],
  education: [
    {
      id: uuidv4(),
      universityName: 'University of Gotham',
      city: 'Gotham',
      degree: 'Master',
      subject: 'Crime Fighting',
      from: '1939',
      to: '2022',
    },
    {
      id: uuidv4(),
      universityName: 'League of Shadows',
      city: 'Hanoi',
      degree: 'Master',
      subject: 'Vigilantism',
      from: '2005',
      to: '2015',
    },
    {
      id: uuidv4(),
      universityName: 'Yale University',
      city: 'New Haven',
      degree: 'Master',
      subject: 'Business',
      from: '2002',
      to: '2005',
    },
  ],
  experience: [
    {
      id: uuidv4(),
      position: 'CEO',
      company: 'Wayne Corp.',
      city: 'Gotham',
      from: '1974',
      to: '2022',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolores debitis, doloribus porro delectus velit.',
    },
    {
      id: uuidv4(),
      position: 'Leader',
      company: 'Justice League',
      city: 'World',
      from: '2016',
      to: '2022',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem doloremque explicabo delectus quidem minus obcaecati beatae odit exercitationem, vitae, nostrum voluptatibus repellendus amet maiores ea quas dolorem omnis deleniti porro.',
    },
    {
      id: uuidv4(),
      position: 'Member',
      company: 'League of Shadows',
      city: 'Hanoi, Vietnam',
      from: '2005',
      to: '2015',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim velit beatae numquam obcaecati voluptatum modi.',
    },
  ],
  awards: [
    {
      id: uuidv4(),
      title: 'Detective of the Year',
      organization: 'The Gotham Globe',
      year: '2022',
    },
    {
      id: uuidv4(),
      title: 'The Most Restless Vigilante',
      organization: 'Unknown',
      year: '2021',
    },
  ],
  interests: ['fitness', 'books', 'craft', 'mma'],
};

export default exampleCV;
