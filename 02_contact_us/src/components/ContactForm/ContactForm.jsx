import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdOutlineMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";

const ContactForm = () => {
  return (
    <section className={`${styles.container}`}>
      <div className={`${styles.contact_form}`}>
        <div className={styles.top_btn}>
          <Button text="VIEW SUPPORT CHAT" icon={<MdOutlineMessage />} />
          <Button text="VIA CALL" icon={<IoCall />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<MdOutlineMail />}
        />

        <form action="">
          <div className={styles.form_controls}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_controls}>
            <label htmlFor="email">E-Mail</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_controls}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="5" ></textarea>
          </div>
          <div className= {styles.submit_btn}>
          <Button text="Submit" /></div>
        </form>
      </div>
      <div className={styles.contactImage}>
        <img src="/Images/Service 24_7-pana 1.svg" alt="ContactImage" />
      </div>
    </section>
  );
};
export default ContactForm;
