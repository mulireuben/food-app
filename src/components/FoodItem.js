import styles from './fooditem.module.css';
export default function FoodItem({ food, setFoodId }) {
  return (
    <div className={styles.foodcontainer}>
      <img className={styles.imagecontainer} src={food.image} alt='' />
      <div className={styles.itemContent}>
        <p className={styles.itemname}>{food.title}</p>
      </div>
      <div className={styles.buttoncontainer}>
        <button
          onClick={() => {
            console.log(food.id);
            setFoodId(food.id);
          }}
          
          className={styles.itembutton}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}
