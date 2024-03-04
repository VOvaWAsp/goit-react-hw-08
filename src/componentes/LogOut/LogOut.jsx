import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import Button from '@mui/material/Button';

export default function LogOut() {
  const dispatch = useDispatch();
  return (
    <div>
      <Button type="submit" onClick={() => dispatch(logOut())} variant="text">
        LogOut
      </Button>
      {/* <button type="submit" onClick={() => dispatch(logOut())}>
        LogOut
      </button> */}
    </div>
  );
}
