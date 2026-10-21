// Edit this file to update the content shown on the website.

export const profile = {
  name: 'Bharanidharan V',
  title: 'Developer & Student',
  tagline: 'Learning, building, and bringing ideas to life.',
  skills: ['React', 'Node.js', 'Java', 'JavaScript', 'Python', 'ESP32', 'AI / ML', 'Drones', 'HTML & CSS', 'Git'],
  about: {
    intro:
      'I am a computer science student who enjoys turning ideas into working software and hardware. I like understanding how things work, then building something useful with that knowledge.',
    education: 'B.E. Computer Science and Engineering, LICET, Chennai',
    interests: ['Coding', 'Software development', 'AI / ML', 'Drone technology'],
    enjoy: 'Learning new technologies, building projects, and taking part in competitions.'
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
  { id: 'email', label: 'Email', value: 'your.email@example.com', href: 'mailto:your.email@example.com' },
  { id: 'github', label: 'GitHub', value: 'github.com/your-username', href: 'https://github.com/' },
  { id: 'linkedin', label: 'LinkedIn', value: 'linkedin.com/in/your-name', href: 'https://www.linkedin.com/' },
  { id: 'resume', label: 'Resume', value: 'View or download', href: '/resume.pdf', download: true },
  { id: 'website', label: 'Website', value: 'Coming soon', href: null }
];
