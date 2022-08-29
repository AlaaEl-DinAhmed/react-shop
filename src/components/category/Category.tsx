import styles from "./Category.module.scss";
import { ICategory } from "./ICategory";

export const Category: React.FC<{ category: ICategory }> = ({ category }) => {
  return (
    <section className={styles.card}>
      <div
        className={styles["card__item--background"]}
        style={{
          backgroundImage: `url(${category.imageUrl})`,
        }}
      ></div>
      <div className={styles["card__item--body"]}>
        <h2>{category.title}</h2>
        <p>Shop Now</p>
      </div>
    </section>
  );
};
