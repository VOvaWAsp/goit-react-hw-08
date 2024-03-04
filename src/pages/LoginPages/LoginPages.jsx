import LoginForm from '../../componentes/LoginForm/LoginForm';
import css from './LoginPages.module.css';

export default function LoginPages() {
  return (
    <div className={css.container}>
      <LoginForm />
    </div>
  );
}
