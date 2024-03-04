import { selectFilters } from '../../redux/selectors';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import ReactModal from 'react-modal';
import { WarningModalMessage } from '../WarningModalMessage/WarningModalMessage';
import { useState } from 'react';
ReactModal.setAppElement('#root');

export default function ContactList() {
  // const contacts = useSelector(state => state.contacts.items);
  // const filter = useSelector(state => state.filter);
  // const filters = contacts.filter(contact => {
  //   return contact.name.toLowerCase().includes(filter.toLowerCase());
  // });
  const [regular, setRegular] = useState(null);
  //   let image = items.map(item => {
  //     return item.urls.regular;
  //   });
  const [state, setState] = useState(false);

  const handleOpenModal = regular => {
    setState(true);
    setRegular(regular);
  };

  const handleCloseModal = () => {
    setState(false);
  };
  const filter = useSelector(selectFilters);
  // console.log(contacts);
  return (
    <div>
      <ul className={css.container}>
        {filter.map(item => {
          return (
            <li key={item.id} className={css.item}>
              <Contact contacts={item} isOpen={handleOpenModal} />
            </li>
          );
        })}
      </ul>
      <WarningModalMessage closetModal={handleCloseModal} value={state} btn={regular} />
    </div>
  );
}
