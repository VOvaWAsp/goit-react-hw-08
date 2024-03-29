import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import toast from 'react-hot-toast';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import css from './WarningModalMessage.module.css';

export function WarningModalMessage({ closetModal, value, btn }) {
  const dispatch = useDispatch();
  const handleDelete = () =>
    dispatch(deleteContact(btn))
      .unwrap()
      .then(() => toast('Succseful'))
      .catch(() => toast('Not succseful'));
  return (
    <div>
      <Modal
        isOpen={value}
        onRequestClose={closetModal}
        className={css.container}
        contentLabel="Example Modal"
      >
        <div>
          <h2>Warning</h2>
        </div>
        <form>
          <Button
            onClick={handleDelete}
            type="button"
            variant="outlined"
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
          {/* <button onClick={handleDelete}>Delete</button> */}
          <Button onClick={closetModal} type="button" variant="outlined">
            close
          </Button>
          {/* <button onClick={closetModal}>close</button> */}
        </form>
      </Modal>
    </div>
  );
}
