export async function getFoods(order = 'createdAt') {
  const query = `oreder=${order}`;
  const response = await fetch(`https://learn.codeit.kr/5501/foods?${query}`);
  const body = await response.json();

  return body;
}
