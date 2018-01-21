
const createArrayFromRange = (start, end, step = 1) => (
  Array(((end - start) / step) + 1).fill().map((x, i) => (i * step) + start)
);

export default createArrayFromRange;
