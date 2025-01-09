import clsx from "clsx";
import s from "../Contact/Contact.module.css";
import { FaPhone } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";

export default function Contact({ contact: { id, name, number }, onDelete }) {
  return (
    <div className={clsx(s.contactBox)}>
      <div>
        <p className={clsx(s.text)}>
          <FaUser className={clsx(s.icons)} />
          {name}
        </p>

        <p className={clsx(s.text)}>
          <FaPhone className={clsx(s.icons)} />
          {number}
        </p>
      </div>
      <button
        className={clsx(s.btnDelete)}
        onClick={() => onDelete(id)}
        type="button"
      >
        Delete
      </button>
    </div>
  );
}
