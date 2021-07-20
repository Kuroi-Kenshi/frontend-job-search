export const getData = (url) => {
  const data = fetch(url)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err));
  return data;
};
