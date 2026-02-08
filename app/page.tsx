import styles from "./page.module.css";
import Image from "next/image";
import { getNewsList } from "./_libs/microcms";
import { TOP_NEWS_LIMIT } from "./_constants";
import NewsList from "./_componets/NewsList";
import ButtonLink from "./_componets/ButtonLink";

export default async function Home() {
  const data = await getNewsList({ limit: TOP_NEWS_LIMIT, });
  return (
    <>
      <section className={styles.top} >
        <Image className={styles.bgimg} src="/bg-index.jpg" alt="" width={4000} height={1200} priority sizes="100vw" />
        <div className={styles.news}>
          <Image src="/photograph-beach-06.png" alt="" className={styles.photograph} width={0} height={0} priority sizes="100%" />
        </div>
      </section>
    </>
  );
}