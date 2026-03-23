"use client";
import { sendGTMEvent } from "@next/third-parties/google";
import { createContactData } from "../../_actions/contact";
import { useFormState } from "react-dom";
import styles from "./index.module.css";

const initialState = {
  status: "",
  message: "",
};

export default function ContactForm() {
  const [state, formAction] = useFormState(createContactData, initialState);
  console.log(state);

  const hadleSubmit = () => {
    sendGTMEvent({ event: "contact", value: "submit" });
  }

  if (state.status === "success") {
    return (<p className={styles.success}>お問い合わせいただき、ありがとうございます。<br />お返事まで今しばらくお待ちください。</p>);
  }
  return (
    <div className={styles.container}>
      <p className={styles.text}>ご質問、ご相談は下記フォームよりお問い合わせください。<br />内容確認後、通常3営業日以内にご連絡いたします。</p>

      <form className={styles.form} action={formAction} onSubmit={hadleSubmit}>
        <div className={styles.horizontal}>
          <div className={styles.item}>
            <label className={styles.label} htmlFor="lastname">姓</label>
            <input className={styles.textfield} type="text" id="lastname" name="lastname" />
          </div>
          <div className={styles.item}>
            <label className={styles.label} htmlFor="firstname">
              名
            </label>
            <input className={styles.textfield} type="text" id="firstname" name="firstname" />
          </div>
        </div>
        <div className={styles.item}>
          <label className={styles.label} htmlFor="company">会社名</label>
          <input className={styles.textfield} type="text" id="company" name="company" />
        </div>
        <div className={styles.item}>
          <label className={styles.label} htmlFor="email">メールアドレス</label>
          <input className={styles.textfield} type="text" id="email" name="email" />
        </div>
        <div className={styles.item}>
          <label className={styles.label} htmlFor="message">メッセージ</label>
          <textarea className={styles.textarea} id="message" name="message" rows={8} />
        </div>
        <div className={styles.actions}>
          {state.status === "error" && (
            <p className={styles.error}>{state.message}</p>
          )}
          <input type="submit" value="SEND" className={styles.button} />
        </div>
      </form>

    </div>
  );
}