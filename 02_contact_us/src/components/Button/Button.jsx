import { MdOutlineMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import styles from "./Button.module.css";


const Button = ({isOutline,icon,text}) => 
{
  return (
    <button className= {isOutline ? styles.white_btn: styles.black_btn}>

        {/* {props.icon} */}
        {icon}
        {/* {props.text} */}
        {text}
    </button>
  );
};
export default Button;