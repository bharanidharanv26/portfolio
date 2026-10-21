// Edit this file to update the content shown on the website.

export const profile = {
  name: 'Bharanidharan V',
  title: ' Full Stack Developer',
  tagline: 'Learning, building, and bringing ideas to life.',
  skills: ['React', 'Node.js', 'Java', 'JavaScript', 'Python', 'ESP32', 'AI / ML', 'Drones', 'HTML', 'CSS' , 'Git'],
  about: {
    intro:
      "Hello, I'm Bharanidharan, a Computer Science and Engineering student at LICET, Chennai. I'm someone who enjoys exploring technology, writing code, and turning ideas into working projects. I like learning by building, experimenting with new tools, and taking on challenges that push me beyond what I already know. From software development to drone technology, I'm always curious about how things work and how I can make them better.",
    sections: [
      {
        id: 'coding',
        title: 'I code',
        body: "Coding is one of the ways I bring my ideas to life. I enjoy solving problems, exploring different programming languages, and building applications that are useful in the real world. Every project teaches me something new, and I see every challenge as an opportunity to improve. I'm still learning, still experimenting, and always looking for something new to build."
      },
      {
        id: 'technology',
        title: 'Tech is my thing',
        body: 'What excites me about technology is how different fields come together to create something meaningful. I enjoy exploring software development, databases, AI, and embedded systems. Working with drones has also introduced me to the connection between code and the physical world. I love experimenting, understanding how things work behind the scenes, and discovering what I can create next.'
      },
      {
        id: 'building',
        title: 'I love building things',
        body: "For me, a project is more than just code. It's an opportunity to take an idea, understand a problem, and turn it into something people can actually use. Whether I'm developing a website, experimenting with hardware, or working with a team, I enjoy the process of learning, solving problems, and bringing ideas to life."
      },
      {
        id: 'teamwork',
        title: 'Learning, teamwork and challenges',
        body: "I enjoy participating in competitions, collaborating with teammates, and sharing what I learn with others. As a drone team captain, I've gained experience working with people, exploring technical challenges, and conducting drone workshops. These experiences continue to help me grow as both a developer and a teammate."
      },
      {
        id: 'mindset',
        title: 'My mindset',
        body: "I'm not someone who knows everything, and I don't pretend to. I'm here to keep learning, keep building, and get better with every experience. I believe that curiosity, consistency, and the courage to try something new can take an idea a long way."
      }
    ],
    closing: 'Always learning. Always building. Always curious.',
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
  { id: 'email', label: 'Email', value: 'bharanidharanv26@gmail.com', href: 'mailto:bharanidharanv26@gmail.com' },
  { id: 'github', label: 'GitHub', value: 'github.com/bharanidharanv26', href: 'https://github.com/bharanidharanv26.git' },
  { id: 'linkedin', label: 'LinkedIn', value: 'linkedin.com/in/bharanidharanv26', href: 'https://www.linkedin.com/bharanidharanv26' },
  { id: 'resume', label: 'Resume', value: 'View or download', href: '/resume.pdf', download: true },
  { id: 'website', label: 'Website', value: 'Coming soon', href: null }
];
