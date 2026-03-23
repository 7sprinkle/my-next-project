import styles from "./page.module.css";
import Image from "next/image";
import { getNewsList } from "./_libs/microcms";
import { TOP_NEWS_LIMIT } from "./_constants";
import NewsList from "./_componets/NewsList";
import About from "./_componets/About";
import ContactForm from "./_componets/ContactForm";
import ButtonLink from "./_componets/ButtonLink";
import { News } from "@/app/_libs/microcms";
import { NEWS_LIST_LIMIT } from "./_constants/index";

export default async function Home() {
  const { contents: news, totalCount } = await getNewsList({ limit: 1, })
  return (
    <>
      {/* opening */}
      <section className={styles.top} >
        <Image className={styles.bgimg} src="/bg-index.jpg" alt="" width={4000} height={1200} priority sizes="100vw" />
      </section>
      {/* about */}
      <section className={styles.about} >
        <div className={styles.about}>
          <About />
        </div>
      </section>
      {/* work */}
      <section className={styles.work} >
        <div className={styles.news}>
          <NewsList news={news} />
        </div>
      </section>
      {/* contact */}
      <section className={styles.contact} >
        <ContactForm />
      </section>
    </>
  );
}