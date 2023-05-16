export const useGetTime = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const hours = now.getHours();
  const minutes = (now.getMinutes() < 10 ? "0" : "") + now.getMinutes();

  const date = `${day < 10 ? `0${day}` : day}.${
    month < 10 ? `0${month}` : month
  }.${year} ${hours}:${minutes}`;

  return { date };
};
