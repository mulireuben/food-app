import { useEffect } from 'react';

export default function Fooddetails({ foodId }) {
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = 'eeecea93276f4ad1bb85892fdfce76a7';

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
    }
    fetchFood();
  }, []);
  return <div>Food Details {foodId}</div>;
}
