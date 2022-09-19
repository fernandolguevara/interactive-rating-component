const times = (num: number, increment = 0) => {
  const res: number[] = [];
  for (let i = 0; i < num; i++) res.push(i + increment);

  return res;
};

export default times;
