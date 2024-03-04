import { useAuth } from '../../hooks/useAuth';
import AuthNav from '../AuthNav/AuthNav';
import Navigator from '../Navigator/Navigator';
import UserMenu from '../UserMenu/UserMenu';
import css from './AppBar.module.css';

export default function AppBar() {
  const { isLoggedIn } = useAuth();
  console.log(isLoggedIn);
  return (
    <header className={css.header}>
      <Navigator />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
