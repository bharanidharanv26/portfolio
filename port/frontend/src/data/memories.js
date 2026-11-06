const uploadedPhotos = [
  ['95d33248b06184235bfe7f0dc0ace640.jpg', 'Memory portrait'],
  ['Bharanidharan coat.png', 'Bharanidharan coat'],
  ['about photo.jpg', 'About photo'],
  ['s.jpg', 'Memory photo'],
  ['smiling-anime-boy-with-clouds.jpg', 'Smiling anime boy'],
  ['spider.jpg', 'Spider illustration'],
  ['spiderman.jpg', 'Spider-Man illustration'],
  ['sports.jpg', 'Sports memory'],
  ['travel-1.jpg', 'Travel memory']
];

// Forty positions keep the dome dense; replace or add files in this list later.
export const memories = Array.from({ length: 40 }, (_, index) => {
  const [file, alt] = uploadedPhotos[index % uploadedPhotos.length];
  return {
    src: `/images/memories/${encodeURIComponent(file)}`,
    alt: `${alt} ${index + 1}`,
    title: `${alt} ${index + 1}`
  };
});
