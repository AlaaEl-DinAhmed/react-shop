import { CATEGORIES } from "../../constants/categories";
import { Category } from "../category/Category";
import styles from "./Directory.module.scss";

const Directory = () => {
  return (
    <div className={styles.container}>
      {CATEGORIES.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
