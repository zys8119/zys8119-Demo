const a = (n: number) => {
  if (n === 1 || n === 2) return n - 1;
  return a(n - 1) + a(n - 2);
};
console.log(a(4));
