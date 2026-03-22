import styles from "./page.module.css";
import Image from "next/image";
import { getNewsList } from "./_libs/microcms";
import { TOP_NEWS_LIMIT } from "./_constants";
import NewsList from "./_componets/NewsList";
import ButtonLink from "./_componets/ButtonLink";
import { News } from "@/app/_libs/microcms";
import { NEWS_LIST_LIMIT } from "./_constants/index";

export default async function Home() {
  const { contents: news, totalCount } = await getNewsList({ limit: 1, })
  return (
    <>
      <section className={styles.top} >
        <Image className={styles.bgimg} src="/bg-index.jpg" alt="" width={4000} height={1200} priority sizes="100vw" />
        <div className={styles.news}>
          <NewsList news={news} />
        </div>
      </section>
    </>
  );
}