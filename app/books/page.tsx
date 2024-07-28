import { BOOKS_API_URL } from "../constants";
import BookInfo from "../../components/book-info";
import styles from "./books.module.css";
export const metadata = {
    title: "Books",
}

async function getBookLists(list_name:string) {
    //await new Promise(resolve => setTimeout(resolve, 3000));

    const res = await fetch(`${BOOKS_API_URL}/list?name=${list_name}`);
    const json = await res.json();
    return json;
}

interface IBookInfo {
  title: string;
  author: string;
  book_image: string;
  amazon_url: string;
}

export default async function BooksPage({params, searchParams}) {
  // console.log(params, searchParams);
    const lists = await getBookLists(searchParams.list_name);
  // console.log(lists.results);
    return  (
    <>
    <div className={styles.name}>{lists.results.list_name}</div>
    <div className={styles.container} >
    {lists?.results.books.map(book => (
      <div key={book.primary_isbn10}>
        <BookInfo book_image={book.book_image} title={book.title} author={book.author} amazone_url={book.amazon_product_url} />
      </div>
    ))}
  </div>
    </>);
}