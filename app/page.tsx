import { BOOKS_API_URL } from "./constants";
import styles from "../styles/home.module.css";
import Link from "next/link";

export const metadata = {
    title: "Home",
}

async function getBestSellersLists() {
    //await new Promise(resolve => setTimeout(resolve, 3000));

    const res = await fetch(`${BOOKS_API_URL}/lists`);
    const json = await res.json();
    return json;
}
export default async function HomePage() {
    const lists = await getBestSellersLists();
    return     <div className={styles.container}>
    {lists?.results.map((list:{list_name: string, list_name_encoded:string}) => (
      <div key={list.list_name_encoded}>
        <Link href={{
          pathname: "/books",
          query: {list_name: list.list_name_encoded}}}>{list.list_name_encoded}</Link>
      </div>
    ))}
  </div>
}