export const getData = async (url) => {
  const data = await fetch(url);
  return await data.json();
};
