import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import { filterFiltration } from '../../redux/filterSlice';
import { selectFilter } from '../../redux/selectors';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilter);
  console.log(filters);

  //   const fsdfsfg = contacts.map(contact => {
  //     return contact.name;
  //   });
  const filter = event => dispatch(filterFiltration(event.target.value));
  return (
    <div className={css.container}>
      <input name="filter" onChange={filter} value={filters} className={css.input} />
    </div>
  );
}
