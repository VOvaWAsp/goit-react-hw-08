import RegisterForm from '../../componentes/RegisterForm/RegisterForm';
import css from './RegisterPages.module.css';

export default function RegisterPages() {
  return (
    <div className={css.container}>
      {' '}
      <RegisterForm />{' '}
    </div>
  );
}
