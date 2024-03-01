import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/operations";
// import { deleteContacts } from '../../redux/contactsSlice';
// import { FaPhoneAlt } from "react-icons/fa";
// import { RxAvatar } from "react-icons/rx";

export default function Contact({ contacts }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contacts.id));
  // console.log(contacts);
  return (
    <div>
      <h2 className={css.text}>
        {/* <RxAvatar size={26} /> */}
        {contacts.name}
      </h2>
      <p className={css.text}>
        {/* <FaPhoneAlt size={16} /> */}
        {contacts.number}
      </p>
      <button onClick={handleDelete} className={css.button} type="button">
        Delete
      </button>
    </div>
  );
}
