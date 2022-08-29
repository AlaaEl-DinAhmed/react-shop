import { Category } from "@/components/category/Category";
import { CATEGORIES } from "@/constants/categories";
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
