export const sleep = async (t: number) => {
  return new Promise((res) => setTimeout(res, t));
};
