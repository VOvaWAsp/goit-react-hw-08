// import { useDispatch, useSelector } from "react-redux";
// import ContactList from "./ContactList/ContactList";
// import { useEffect } from "react";
// import { fetchContacts } from "../redux/operations";
// import { selectIsLoading } from "../redux/selectors";
// import RegisterForm from './RegisterForm/RegisterForm';
// import LoginForm from './LoginForm/LoginForm';
// import LogOut from './LogOut/LogOut';
import { Route, Routes } from 'react-router-dom';
import HomePages from '../pages/HomePages/HomePages';
import RegisterPages from '../pages/RegisterPages/RegisterPages';

import ContactsPages from '../pages/ContactsPages/ContactsPages';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from '../redux/auth/operations';
import LoginPages from '../pages/LoginPages/LoginPages';
import AppBar from './AppBar/AppBar';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import RestrictedRoute from './RestrictedRoute/RestrictedRoute';
import { useAuth } from '../hooks/useAuth';
import { BarLoader } from 'react-spinners';

export default function App() {
  // const dispatch = useDispatch();
  // const loading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  // const { isRefreshing } = useAuth();
  // console.log(isRefreshing);

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);

  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <BarLoader color="#36d7b7" />
  ) : (
    <div>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route
          path="/register"
          element={<RestrictedRoute redirectTo="/contacts" component={<RegisterPages />} />}
        />
        <Route
          path="/login"
          element={<RestrictedRoute redirectTo="/contacts" component={<LoginPages />} />}
        />
        <Route
          path="/contacts"
          element={<PrivateRoute redirectTo="/login" component={<ContactsPages />} />}
        />
      </Routes>
    </div>
  );
}
