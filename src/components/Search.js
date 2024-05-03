import { useEffect, useState } from 'react';
import styles from "./search.module.css";

// const URL = 'https://api.spoonacular.com/recipes/complexSearch';
// const API_KEY = 'eeecea93276f4ad1bb85892fdfce76a7';

export default function Search({foodData, setFoodData}) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=eeecea93276f4ad1bb85892fdfce76a7`
      );
    
      console.log(res);
      const data = await res.json();
     console.log(data.results);
     setFoodData(data.results)
    }
    fetchData();
  }, []);

  return (
    <div className={styles.searchcontainer}>
      <input className={styles.input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type='text'
      />
    </div>
  );
}
