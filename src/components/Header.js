import classes from './Header.module.css';
import {authActions} from "../store/auth";
import {useSelector, useDispatch} from "react-redux";
import toast, {Toaster} from 'react-hot-toast'

const Header = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const dispatchLogOut = useDispatch();

  const logoutHandler = e => {
    e.preventDefault();
    dispatchLogOut(authActions.logout());
    toast.success('Logged Out')
  }

  const nav = <nav>
    <Toaster />
    <ul>
      <li>
        <a href='/'>My Products</a>
      </li>
      <li>
        <a href='/'>My Sales</a>
      </li>
      <li>
        <button onClick={logoutHandler}>Logout</button>
      </li>
    </ul>
  </nav>

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isLoggedIn && nav}
    </header>
  );
};

export default Header;
