import css from './Contact.module.css';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Avatar from '@mui/material/Avatar';

// import { deleteContacts } from '../../redux/contactsSlice';
// import { FaPhoneAlt } from "react-icons/fa";
// import { RxAvatar } from "react-icons/rx";

export default function Contact({ contacts, isOpen }) {
  // console.log(contacts);
  return (
    <div className={css.container}>
      <Avatar src="/broken-image.jpg" />
      <div className={css.blockContact}>
        <h2 className={css.text}>
          {/* <RxAvatar size={26} /> */}
          <span>Name:</span> {contacts.name}
        </h2>
        <p className={css.text}>
          {/* <FaPhoneAlt size={16} /> */}
          <span>Phone:</span> {contacts.number}
        </p>
      </div>

      <Button
        onClick={() => isOpen(contacts.id)}
        className={css.button}
        type="button"
        variant="outlined"
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
      {/* <button onClick={() => isOpen(contacts.id)} className={css.button} type="button">
        Delete
      </button> */}
    </div>
  );
}
