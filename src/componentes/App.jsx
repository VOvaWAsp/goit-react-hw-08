import { useDispatch, useSelector } from "react-redux";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import { useEffect } from "react";
import { fetchContacts } from "../redux/operations";
import { selectIsLoading } from "../redux/selectors";
import RegisterForm from "./RegisterForm/RegisterForm";

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <RegisterForm />
      <ContactForm />
      <SearchBox />
      {loading === true ? (
        <p>Loading</p>
      ) : (
        <div>
          <ContactList />
        </div>
      )}
    </div>
  );
}
