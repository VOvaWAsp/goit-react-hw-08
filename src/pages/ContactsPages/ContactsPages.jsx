import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectIsLoading } from '../../redux/selectors';
import ContactList from '../../componentes/ContactList/ContactList';
import { fetchContacts } from '../../redux/operations';
import ContactForm from '../../componentes/ContactForm/ContactForm';
import SearchBox from '../../componentes/SearchBox/SearchBox';
import toast, { Toaster } from 'react-hot-toast';
import css from './ContactsPages.module.css';
import { BarLoader } from 'react-spinners';

export default function ContactsPages() {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <ContactForm />
      <SearchBox />
      {loading === true ? (
        <BarLoader color="#36d7b7" />
      ) : (
        <div>
          <ContactList />
        </div>
      )}
      <Toaster />
    </div>
  );
}
