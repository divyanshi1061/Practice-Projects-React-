import styles from './ContactHeader.module.css';

const ContactHeader = () => {
  return (
    <header className={`${styles.contact_section} `}>
      <h1>Contact Us</h1>
      <p>WE WOULD LOVE TO HEAR FROM YOU! PLEASE FILL OUT THE FORM BELOW TO GET IN TOUCH.</p>
    </header>
    
  );
}

export default ContactHeader;