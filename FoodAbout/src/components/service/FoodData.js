export const getFoods = async () => {
  const response = await fetch("https://your-backend-url.com/foods");
  const data = await response.json();
  return data;
};
