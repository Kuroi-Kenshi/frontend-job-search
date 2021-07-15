export const getData = async (url) => {
  try {
    const data = await fetch(url);
    if (!data.ok) {
      console.error(data.status);
      return false;
    }

    return await data.json();
  } catch (error) {
    console.error(error);
    return false;
  }
};
