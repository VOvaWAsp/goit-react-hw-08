import LogOut from '../LogOut/LogOut';
import { useAuth } from '../../hooks/useAuth';
import css from './UserMenu.module.css';

export default function UserMenu() {
  //   const userName = useSelector(selectUser);
  const { user } = useAuth();
  console.log(user);
  return (
    <div className={css.container}>
      <p className={css.text}>{user.name}</p>
      <LogOut />
    </div>
  );
}
