import styles from "../styles/book-info.module.css";

interface IBookInfo {
    title: string;
    author: string;
    book_image: string;
    amazone_url: string;
  }
export default function BookInfo({book_image, title, author, amazone_url}:IBookInfo){
    return (    <div className={styles.container}>
        <img
          src={book_image}
          className={styles.cover}
          alt={title}
        />
        <div>
          <h1 className={styles.title}>{title}</h1>
          <h3 className = {styles.info}>Author: {author}</h3>
          <a href={amazone_url} target="_blank" className = {styles.info}>
            Buy now &rarr;
          </a>
        </div>
      </div>
    );
}