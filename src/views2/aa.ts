export const bb = ref("");
export const sleep = (ms: number = 0) =>
  new Promise((resolve) => setTimeout(resolve, ms));
export const arrs = new Array(30)
  .fill(0)
  .map(() => Math.floor(Math.random() * 1000));
