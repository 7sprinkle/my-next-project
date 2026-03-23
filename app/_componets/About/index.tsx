import Image from "next/image";
import { getMemberList } from "../../_libs/microcms";
import { MEMBER_LIST_LIMIT } from "../../_constants";
// import styles from "./page.module.css";
import styles from "./index.module.css"
import { url } from "inspector";

export default async function About() {
  const data = await getMemberList({ limit: MEMBER_LIST_LIMIT });
  return (
    <div className={styles.container}>
      {data.contents.length === 0 ? (
        <p className={styles.empty}>メンバーが登録されていません。</p>
      ) : (
        <ul>
          {data.contents.map((member) => (
            <li key={member.id} className={styles.list}>
              <Image src={member.image.url} alt="profile" className={styles.img} width="260" height="260" />
              <dl>
                <dd className={styles.name}>{member.name}</dd>
                <dd className={styles.position}>{member.position}</dd>
                <dd className={styles.profile}>{member.profile}</dd>
                <br></br>
                <dd className={styles.profile_en}>{member.profile_en}</dd>
              </dl>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}