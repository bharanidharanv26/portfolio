// Add your memory photos to frontend/public/images/memories/ and list them here.
// Any image format works (jpg, png, webp). Keep 6-12 photos for the best look.
export const memories = [1, 2, 3, 4, 5, 6, 7, 8].map(n => ({
  src: `/images/memories/m${n}.svg`,
  alt: `Memory ${n}`,
  title: `Memory ${n}`
}));
