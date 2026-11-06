// Edit this file to update the content shown on the website.

const skillGroups = [
  {
    id: 'programming',
    title: 'Programming Languages',
    skills: ['C', 'C++', 'Python', 'Java', 'JavaScript', 'TypeScript', 'SQL']
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    skills: ['HTML', 'CSS', 'React.js', 'Next.js']
  },
  {
    id: 'backend',
    title: 'Backend Development',
    skills: ['Node.js', 'Express.js']
  },
  {
    id: 'databases',
    title: 'Databases',
    skills: ['MongoDB', 'MySQL', 'Supabase']
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    skills: ['Neural Networks', 'TensorFlow', 'Keras', 'OpenCV', 'YOLO']
  },
  {
    id: 'robotics',
    title: 'Robotics & Embedded Systems',
    skills: ['Arduino', 'ESP32', 'ROS 2', 'Drone Development']
  },
  {
    id: 'drone-tools',
    title: 'Drone Software & Tools',
    skills: ['Mission Planner', 'Betaflight']
  }
];

export const profile = {
  name: 'Bharanidharan V',
  title: ' Full Stack Developer',
  tagline: 'Learning, building, and bringing ideas to life.',
  skills: skillGroups.flatMap(group => group.skills),
  skillGroups,
  // Main technologies shown in the homepage rolling strip.
  featuredSkills: [
    'React.js', 'Next.js', 'Node.js', 'JavaScript', 'TypeScript',
    'Python', 'Java', 'C++', 'SQL', 'MongoDB',
    'TensorFlow', 'OpenCV', 'ESP32', 'ROS 2', 'Drone Development'
  ],
  about: {
    intro:
      "Learning by doing is how I grow best. As a Computer Science student at LICET, Chennai, I've worked on web projects and hackathon prototypes, and taken part in drone and robotics competitions. Every project teaches me something new—from solving technical problems to communicating and working closely with a team. I enjoy leading my college drone team, sharing what I know, and learning from others along the way. I stay curious about new technologies and look for opportunities to improve, take on fresh challenges, and build practical solutions that make a difference.",
    education: 'B.E. Computer Science and Engineering, LICET, Chennai',
    interests: ['Coding', 'Software development', 'AI / ML', 'Drone technology'],
    enjoy: 'Learning new technologies, building projects, and taking part in competitions.',
    sections: [
      {
        id: 'coding',
        title: 'I code',
        body: 'I enjoy figuring things out through code—fixing bugs, building features, and seeing an idea become something that works.'
      },
      {
        id: 'building',
        title: 'I love building things',
        sentences: [
          'My favourite part of a project is seeing an idea work for the first time.',
          'A rough prototype is often where my best learning begins.',
          "Some days I'm building for the web; other days, I'm working with drones.",
          'Working with a team helps me see a problem from a different angle.',
          'I like making things that are useful, even when they start small.'
        ]
      }
    ],
    closing: 'Always learning. Always building. Always curious.'
  }
};

export const projects = [
  {
    id: 'movemate',
    title: 'MoveMate',
    description: 'A motor coordination training platform.',
    tech: ['React', 'Node.js'],
    image: '/images/projects/movemate.svg',
    github: 'https://github.com/'
  },
  {
    id: 'little-drops',
    title: 'Little Drops',
    description: 'A management website for an old age home.',
    tech: ['React', 'Node.js', 'MongoDB'],
    image: '/images/projects/little-drops.svg',
    github: 'https://github.com/'
  },
  {
    id: 'e-yantra',
    title: 'E-Yantra',
    description: 'A drone project built for the E-Yantra competition.',
    tech: ['Drones', 'Python', 'Control systems'],
    image: '/images/projects/e-yantra.svg',
    github: 'https://github.com/'
  },
  {
    id: 'esp-fly',
    title: 'ESP-FLY',
    description: 'An ESP32-based drone.',
    tech: ['ESP32', 'C++', 'Embedded'],
    image: '/images/projects/esp-fly.svg',
    github: 'https://github.com/'
  }
];

export const connections = [
  { id: 'email', label: 'Email', value: 'bharanidharanv26@gmail.com', href: 'mailto:bharanidharanv26@gmail.com' },
  { id: 'github', label: 'GitHub', value: 'bharanidharanv26', href: 'https://github.com/bharanidharanv26/' },
  { id: 'linkedin', label: 'LinkedIn', value: 'bharanidharanv26', href: 'https://www.linkedin.com/in/bharanidharanv26/' },
  { id: 'resume', label: 'Resume', value: 'View or download', href: '/resume.pdf', download: true },
  { id: 'website', label: 'Website', value: 'Coming soon', href: null }
];
